import axios from './axios';

const fetchBookmarks = async (categoryId: number) => {
  return await axios.get(`categories/${categoryId}/bookmarks?sort=date`);
}

const deleteBookmark = async (bookmarkId: number) => {
  return await axios.delete(`bookmarks/${bookmarkId}`);
}

export default {
  fetchBookmarks,
  deleteBookmark
};
