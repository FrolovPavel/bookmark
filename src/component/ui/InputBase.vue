<script setup lang="ts">
const data = defineModel<string>();
</script>

<template>
  <input
    v-model="data"
    class="input"
  />
</template>

<style scoped lang="scss">
.input {
  font-size: 24px;
  border: none;
  border-bottom: 1px solid colors.$fg;
  outline: none;
}
</style>
