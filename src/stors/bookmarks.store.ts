import { defineStore } from 'pinia';
import { ref } from 'vue';
import bookmarksApi from '../api/bookmarksApi';
import type { Bookmark } from '../interfaces/bookmark.interface';

export const useBookmarksStore = defineStore('bookmarks', () => {
  const bookmarks = ref<Bookmark[]>([]);
  const activeSort = ref<string>('date');

  async function getBookmarks(categoryId: number, sort: string) {
    const { data } = await bookmarksApi.fetchBookmarks(categoryId, sort);
    bookmarks.value = data;
  }

  async function removeBookmark(categoryId: number, bookmarkId: number) {
    await bookmarksApi.deleteBookmark(bookmarkId);
    await getBookmarks(categoryId, activeSort.value);
  }

  async function addBookmark(url: string, category_id: number) {
    await bookmarksApi.createBookmark({url, category_id});
    await getBookmarks(category_id, activeSort.value);
  }

  return { bookmarks, activeSort, getBookmarks, removeBookmark, addBookmark };
});
