<script setup lang="ts">
import LayoutEmpty from '@/layouts/LayoutEmpty.vue';
import AuthForm from '@/component/AuthForm.vue';
</script>

<template>
  <LayoutEmpty class="auth">
    <h1>Bookmarkly</h1>
    <AuthForm />
  </LayoutEmpty>
</template>

<style scoped lang="scss">
.auth {
  gap: 40px;
}
</style>
