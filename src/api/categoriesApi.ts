import axios from './axios';

const getCategories = async () => {
  return await axios.get('categories');
}

const createCategories = async (category: any) => {
  return await axios.post('categories', category);
}

export default {
  getCategories,
  createCategories
};
