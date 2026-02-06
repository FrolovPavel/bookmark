<script setup lang="ts">
import SidebarBase from '@/component/SidebarBase.vue';
import LayoutSidebar from '@/layouts/LayoutSidebar.vue';
</script>

<template>
  <LayoutSidebar>
    <SidebarBase />
    <RouterView />
  </LayoutSidebar>
</template>
