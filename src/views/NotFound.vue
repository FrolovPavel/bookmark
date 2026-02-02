<script setup lang="ts">
import LayoutEmpty from '@/layouts/LayoutEmpty.vue';
import ButtonBase from '@/component/ui/ButtonBase.vue';
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<template>
  <LayoutEmpty class="not-found">
    <h1 class="not-found__title">404</h1>
    <ButtonBase
      size="big"
      type="text"
      @click="router.push({name: 'auth'})"
    >
      На главную
    </ButtonBase>
  </LayoutEmpty>
</template>

<style scoped lang="scss">
.not-found {
  gap: 40px;

  &__title {
    font-size: 128px;
    font-weight: 700;
  }
}
</style>
