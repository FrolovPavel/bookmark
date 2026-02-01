import { defineStore } from 'pinia';
import { ref } from 'vue';
import categoriesApi from '../api/categoriesApi';
import type { Categories } from '../interfaces/categories.interface';

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<Categories[]>();

  async function setCategories() {
    const { data } = await categoriesApi.getCategories();
    categories.value = data;
  }

  async function onCreateCategories() {
    const { data } = await categoriesApi.createCategories({
      name: 'Новая категория',
      alias: 'new'
    });
    categories.value = data;
  }

  return { categories, setCategories, onCreateCategories };
});
