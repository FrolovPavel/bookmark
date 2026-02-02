import axios from './axios';

const fetchBookmarks = async (categoryId: number) => {
  return await axios.get(`categories/${categoryId}/bookmarks?sort=date`);
}

export default {
  fetchBookmarks
};
