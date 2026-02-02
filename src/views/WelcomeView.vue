<script setup lang="ts"></script>

<template>
  <div class="welcome">
    <h1 class="welcome__title">Добро пожаловать в Bookmarkly!</h1>
    <p>
      Чтобы начать пользоваться выберите категорию закладок или создайте новую.
    </p>
  </div>
</template>

<style scoped lang="scss">
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  width: 100%;

  &__title {
    font-size: 24px;
  }
}
</style>
