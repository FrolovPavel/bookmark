<script setup lang="ts">
const { size = 'big' } = defineProps<{
  size?: 'small' | 'big';
}>();
</script>

<template>
  <button :class="['btn', `btn--${size}`]">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  background-color: colors.$fg;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: color.scale(colors.$fg, $lightness: 30%);
  }

  &--small {
    width: 32px;
    height: 32px;
    padding: 8px;
  }

  &--big {
    padding: 13px;
  }
}
</style>
