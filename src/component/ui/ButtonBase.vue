<script setup lang="ts">
const { size = 'big', type = 'default' } = defineProps<{
  size?: 'small' | 'big';
  type?: 'default' | 'text';
}>();
</script>

<template>
  <button :class="['btn', `btn--${size}`, `btn--${type}`]">
    <slot />
  </button>
</template>

<style scoped lang="scss">
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: colors.$fg;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: background-color 0.3s;
  color: colors.$bg;
  font-size: 18px;
  font-weight: 700;

  &:hover {
    background-color: color.scale(colors.$fg, $lightness: 30%);
  }

  //size
  &--small {
    width: 32px;
    height: 32px;
    padding: 8px;
  }

  &--big {
    padding: 12px;
  }

  //type
  &--text {
    width: auto;
    padding-left: 40px;
    padding-right: 40px;
  }
}
</style>
