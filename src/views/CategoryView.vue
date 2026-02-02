<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { watch } from 'vue';
import { useCategoriesStore } from '@/stors/categories.store';
import type { Category } from '@/interfaces/categories.interface';
import { useBookmarksStore } from '@/stors/bookmarks.store';

const categoriesStore = useCategoriesStore();
const bookmarksStore = useBookmarksStore();
const route = useRoute();
const category = ref<Category>();

watch(
  () => ({
    alias: route.params.alias,
    categories: categoriesStore.categories,
  }),
  (data) => {
    category.value = categoriesStore.getCategoryByAlies(data.alias);
    if (category.value?.id) {
      bookmarksStore.getBookmarks(category.value.id);
    }
  },
);
</script>

<template>
  {{ category?.name }}
  {{ bookmarksStore.bookmarks }}
</template>

<style scoped lang="scss"></style>
