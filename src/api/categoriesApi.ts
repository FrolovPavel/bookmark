import axios from './axios';
import type { CategorySend } from '../interfaces/categories.interface';

const fetchCategories = async () => {
  return await axios.get('categories');
}

const createCategory = async (category: CategorySend) => {
  return await axios.post('categories', category);
}

const updateCategory = async (id: number, category: CategorySend) => {
  return await axios.put(`categories/${id}`, category);
}

const deleteCategory = async (id: number) => {
  return await axios.delete(`categories/${id}`);
}

export default {
  fetchCategories,
  createCategory,
  updateCategory,
  deleteCategory
};
