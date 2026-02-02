<script setup lang="ts">
import SidebarBase from '@/component/sidebar/SidebarBase.vue';
</script>

<template>
  <main class="main container">
    <SidebarBase class="main__sidebar" />
    <RouterView />
  </main>
</template>

<style scoped lang="scss">
.main {
  height: calc(100vh - 80px);

  &.container {
    display: flex;
    gap: 200px;
    margin: 0 auto;
    padding: 80px 32px 0;
    width: 100%;
    max-width: 1440px;
  }

  &__sidebar {
    flex-shrink: 0;
  }
}

</style>
