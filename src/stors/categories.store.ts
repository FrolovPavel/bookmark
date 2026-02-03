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

  function getCategoryByAlies(alies: string | string[] | undefined): Category | undefined {
    if (typeof alies === 'string') {
      return categories.value.find((category) => category.alias === alies);
    }
    return;
  }

  async function addCategory() {
    const { data } = await categoriesApi.createCategory({
      name: 'Новая категория',
      alias: uuidv4(),
    });
    categories.value.push(data);
  }

  async function editCategory(name: string, category: Category) {
    await categoriesApi.updateCategory(category.id, {
      name: name,
      alias: category.alias,
    });
    await getCategories();
  }

  async function removeCategory(id: number) {
    await categoriesApi.deleteCategory(id);
    await getCategories();
  }

  return { categories, getCategories, addCategory, getCategoryByAlies, editCategory, removeCategory };
});
