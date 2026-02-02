<script setup lang="ts">

</script>

<template>
  <main class="layout-sidebar">
    <slot />
  </main>
</template>

<style scoped lang="scss">
.layout-sidebar {
  display: flex;
  gap: 200px;
  margin: 0 auto;
  padding: 80px 32px 0;
  width: 100%;
  max-width: 1440px;
  height: calc(100vh - 80px);
}
</style>
