import { defineStore } from 'pinia';
import { ref } from 'vue';
import categoriesApi from '../api/categoriesApi';
import type { Categories } from '../interfaces/categories.interface';

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<Categories[]>([]);

  async function setCategories() {
    const { data } = await categoriesApi.getCategories();
    categories.value = data;
  }

  async function addCategories() {
    const { data } = await categoriesApi.createCategories({
      name: 'Новая категория1',
      alias: 'new1'
    });
    categories.value.push(data);
  }

  return { categories, setCategories, addCategories };
});
