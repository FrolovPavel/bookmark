<script setup lang="ts">
import ButtonBase from '@/component/ui/ButtonBase.vue';
import { useRouter } from 'vue-router';

const router = useRouter()
</script>

<template>
  <div class="auth">
    <h1 class="auth__logo">Bookmarkly</h1>
    <ButtonBase
      size="big"
      type="text"
      @click="router.push({name: 'main'})"
    >
      Вход
    </ButtonBase>
  </div>
</template>

<style scoped lang="scss">
.auth {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  height: 100vh;
}
</style>
