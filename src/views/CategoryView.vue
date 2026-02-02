<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { watch } from 'vue';
import { useCategoriesStore } from '@/stors/category.store';
import type { Category } from '@/interfaces/categories.interface';

const route = useRoute();
const store = useCategoriesStore();
const category = ref<Category>();

watch(
  () => ({
    alias: route.params.alias,
    categories: store.categories,
  }),
  (data) => {
    category.value = store.getCategoryByAlies(data.alias);
  },
);
</script>

<template>
  {{ category?.name }}
</template>

<style scoped lang="scss"></style>
