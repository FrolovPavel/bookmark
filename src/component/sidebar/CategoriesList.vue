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
  &__list {
    display: flex;
    flex-direction: column;
    gap: 34px;
  }

  &__link {
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
