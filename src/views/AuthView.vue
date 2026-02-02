<script setup lang="ts">
import ButtonBase from '@/component/ui/ButtonBase.vue';
import { useRouter } from 'vue-router';
import LayoutEmpty from '@/layouts/LayoutEmpty.vue';

const router = useRouter()
</script>

<template>
  <LayoutEmpty class="auth">
    <h1>Bookmarkly</h1>
    <ButtonBase
      size="big"
      type="text"
      @click="router.push({name: 'main'})"
    >
      Вход
    </ButtonBase>
  </LayoutEmpty>
</template>

<style scoped lang="scss">
.auth {
  gap: 40px;
}
</style>
