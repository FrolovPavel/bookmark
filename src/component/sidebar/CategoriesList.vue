<script setup lang="ts">
import type { Categories} from '@/interfaces/categories.interface';

const { categories } = defineProps<{
  categories: Categories[]
}>()
</script>

<template>
  <nav class="categories">
    <ul class="categories__list">
      <li
        v-for="category in categories"
        :key="category.id"
        class="categories__item"
      >
        <a class="categories__link" :href="`/${category.alias}`">
          {{ category.name }}
        </a>
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

    &:hover {
      color: colors.$inactive;
    }
  }
}
</style>
