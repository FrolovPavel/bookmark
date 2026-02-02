import axios from './axios';

const fetchCategories = async () => {
  return await axios.get('categories');
}

const createCategories = async (category: object) => {
  return await axios.post('categories', category);
}

export default {
  fetchCategories,
  createCategories
};
