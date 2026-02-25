import axios from './axios';

const fetchBookmarks = async (categoryId: number, sort: string) => {
  return await axios.get(`categories/${categoryId}/bookmarks`, { params: { sort } });
}

const deleteBookmark = async (bookmarkId: number) => {
  return await axios.delete(`bookmarks/${bookmarkId}`);
}

const createBookmark = async (params: object) => {
  return await axios.post('bookmarks', params);
}

export default {
  fetchBookmarks,
  deleteBookmark,
  createBookmark
};
