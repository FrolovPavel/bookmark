<script setup lang="ts">
import InputBase from '@/component/ui/InputBase.vue';
import ButtonBase from '@/component/ui/ButtonBase.vue';
import { useAuthStore } from '@/stors/auth.store';

const store = useAuthStore();
</script>

<template>
  <form
    class="form"
    @submit.prevent="store.onLogin()"
  >
    <InputBase
      v-model="store.form.email"
      placeholder="Email"
      type="email"
    />
    <InputBase
      v-model="store.form.password"
      placeholder="Пароль"
      type="password"
    />
    <ButtonBase
      size="big"
      type="text"
      class="form__button"
    >
      Вход
    </ButtonBase>
  </form>
</template>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  &__button {
    width: fit-content;
  }
}
</style>
