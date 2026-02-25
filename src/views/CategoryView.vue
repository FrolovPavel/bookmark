<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import { watch } from 'vue';
import { useCategoriesStore } from '@/stors/categories.store';
import type { Category } from '@/interfaces/categories.interface';
import { useBookmarksStore } from '@/stors/bookmarks.store';
import CategoryHead from '@/component/CategoryHead.vue';
import CardBookmark from '@/component/CardBookmark.vue';
import SortBookmarks from '@/component/SortBookmarks.vue';
import AddBookmark from '@/component/AddBookmark.vue';

const categoriesStore = useCategoriesStore();
const bookmarksStore = useBookmarksStore();
const route = useRoute();
const category = ref<Category>();

function sortBookmarks(sort: string) {
  bookmarksStore.activeSort = sort;
  if (category.value?.id) {
    bookmarksStore.getBookmarks(category.value.id, bookmarksStore.activeSort);
  }
}

watch(
  () => ({
    alias: route.params.alias,
    categories: categoriesStore.categories,
  }),
  (data) => {
    category.value = categoriesStore.getCategoryByAlies(data.alias);
    if (category.value?.id) {
      bookmarksStore.getBookmarks(category.value.id, bookmarksStore.activeSort);
    }
  },
  { immediate: true },
);
</script>

<template>
  <div class="category">
    <div class="category__head">
      <CategoryHead
        v-if="category"
        :category="category"
      />
      <SortBookmarks
        :option="bookmarksStore.activeSort"
        @sort="(item) => sortBookmarks(item)"
      />
    </div>
    <div
      v-if="bookmarksStore.bookmarks.length"
      class="category__bookmark"
    >
      <CardBookmark
        v-for="bookmark in bookmarksStore.bookmarks"
        :key="bookmark.id"
        v-bind="bookmark"
      />
      <AddBookmark
        v-if="category"
        :categoryId="category.id"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.category {
  width: 100%;

  &__head {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 60px;
  }

  &__bookmark {
    display: grid;
    gap: 34px;
    grid-template-columns: repeat(auto-fit, 290px);
    align-items: stretch;
    grid-auto-rows: 1fr;
  }
}
</style>
