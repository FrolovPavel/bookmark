import { defineStore } from 'pinia';
import { ref } from 'vue';
import bookmarksApi from '../api/bookmarksApi';
import type { Bookmark } from '../interfaces/bookmark.interface';

export const useBookmarksStore = defineStore('bookmarks', () => {
  const bookmarks = ref<Bookmark[]>([]);

  async function getBookmarks(categoryId: number) {
    const { data } = await bookmarksApi.fetchBookmarks(categoryId);
    bookmarks.value = data;
  }

  async function removeBookmark(categoryId: number, bookmarkId: number) {
    await bookmarksApi.deleteBookmark(bookmarkId);
    await getBookmarks(categoryId);
  }

  return { bookmarks, getBookmarks, removeBookmark };
});
