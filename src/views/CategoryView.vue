<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { watch } from 'vue';
import { useCategoriesStore } from '@/stors/categories.store';
import type { Category } from '@/interfaces/categories.interface';
import { useBookmarksStore } from '@/stors/bookmarks.store';
import CategoryHead from '@/component/CategoryHead.vue';
import CardBookmark from '@/component/CardBookmark.vue';

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
  { immediate: true },
);
</script>

<template>
  <div class="category">
    <CategoryHead
      v-if="category"
      :category="category"
    />
    <div v-if="bookmarksStore.bookmarks.length" class="category__bookmark">
      <CardBookmark
        v-for="bookmark in bookmarksStore.bookmarks"
        :key="bookmark.id"
        v-bind="bookmark"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.category {
  width: 100%;

  &__bookmark {
    display: grid;
    gap: 34px;
    grid-template-columns: repeat(auto-fit, 290px);
  }
}
</style>
