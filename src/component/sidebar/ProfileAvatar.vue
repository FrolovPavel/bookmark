<script setup lang="ts">
import type { Profile } from '@/interfaces/profile.interface';

const { profile } = defineProps<{
  profile: Profile
}>()
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
      <b>{{ profile?.name }}</b>
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
