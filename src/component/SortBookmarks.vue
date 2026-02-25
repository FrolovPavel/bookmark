<script setup lang="ts">
const { option } = defineProps<{ option: string }>()

const sortOptions = [
  { option: 'date', name: 'По дате' },
  { option: 'title', name: 'По названию' }
]

const emit = defineEmits<{
  (e: 'sort', option: string): void
}>();
</script>

<template>
  <div class="sort">
    <button
      v-for="item in sortOptions"
      :key="item.option"
      :class="{ action: option === item.option }"
      class="sort__btn"
      @click="emit('sort', item.option)"
    >
      {{ item.name }}
    </button>
  </div>
</template>

<style scoped lang="scss">
.sort {
  display: flex;
  align-items: center;
  gap: 32px;

  &__btn {
    font-size: 16px;
    font-weight: 700;
    border: none;
    border-bottom: 2px solid transparent;
    background-color: transparent;
    padding-bottom: 8px;
    transition: color 0.3s;
    cursor: pointer;
    color: colors.$inactive;

    &.action {
      color: colors.$fg;
      border-bottom: 2px solid;
    }

    &:hover {
      color: color.scale(colors.$fg, $lightness: 30%);
    }
  }
}
</style>
