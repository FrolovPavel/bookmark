<script setup lang="ts">
import { useProfileStore } from '@/stors/profile.store';
import { onMounted } from 'vue';

const store = useProfileStore();

onMounted(() => {
  store.fetchProfile()
})
</script>

<template>
  <div class="avatar">
    <img
      class="avatar__img"
      src="/avatar.png"
      alt="avatar"
    />
    <div class="avatar__welcome">
      Привет,
      <b>{{ store.profile.name }}</b>
      !
    </div>
  </div>
</template>

<style scoped lang="scss">
.avatar {
  display: flex;
  flex-direction: column;
  gap: 24px;

  &__img {
    width: 80px;
    height: 80px;
  }

  &__welcome {
    font-size: 18px;
  }
}
</style>
