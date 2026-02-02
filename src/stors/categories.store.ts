import { defineStore } from 'pinia';
import { ref } from 'vue';
import categoriesApi from '../api/categoriesApi';
import type { Category } from '../interfaces/categories.interface';
import { v4 as uuidv4 } from 'uuid';

export const useCategoriesStore = defineStore('categories', () => {
  const categories = ref<Category[]>([]);

  async function getCategories() {
    const { data } = await categoriesApi.fetchCategories();
    categories.value = data;
  }

  function getCategoryByAlies(alies: string | string[] | undefined): Category | undefined{
    if(typeof alies === 'string') {
      return categories.value.find((category) => category.alias === alies)
    }
    return
  }

  async function addCategories() {
    const { data } = await categoriesApi.createCategories({
      name: 'Новая категория1',
      alias: uuidv4(),
    });
    categories.value.push(data);
  }

  return { categories, getCategories, addCategories, getCategoryByAlies };
});
