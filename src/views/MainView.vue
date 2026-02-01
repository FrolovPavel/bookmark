<script setup lang="ts">
import SidebarBase from '@/component/sidebar/SidebarBase.vue';
</script>

<template>
  <div class="container">
    <SidebarBase />
    <RouterView />
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  padding: 120px 32px 0;
  width: 100%;
  max-width: 1440px;
}
</style>
