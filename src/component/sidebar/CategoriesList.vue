<script setup lang="ts">
import type { Category } from '@/interfaces/categories.interface';

const { categories } = defineProps<{
  categories: Category[];
}>();
</script>

<template>
  <nav class="categories">
    <ul class="categories__list">
      <li
        v-for="category in categories"
        :key="category.id"
        class="categories__item"
      >
        <RouterLink
          class="categories__link"
          active-class="active"
          :to="`/main/${category.alias}`"
        >
          {{ category.name }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<style scoped lang="scss">
.categories {
  padding-bottom: 16px;
  padding-top: 16px;
  border-bottom: 1px solid colors.$inactive;
  border-top: 1px solid colors.$inactive;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 34px;
    height: 35vh;
    overflow-y: auto;
  }

  &__link {
    display: inline-block;
    width: 170px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition: color 0.3s;

    &.active {
      font-weight: 700;
    }

    &:not(.active):hover {
      color: colors.$inactive;
    }

  }
}
</style>
