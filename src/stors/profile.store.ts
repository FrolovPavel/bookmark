import { defineStore } from 'pinia';
import { API_ROUTES } from '../api';
import { ref } from 'vue';
import type { Profile } from '@/interfaces/profile.interface';

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>({
    name: ''
  });

  async function fetchProfile() {
    const data = await fetch(API_ROUTES.profile);
    profile.value = await data.json();
  }

  return { profile, fetchProfile };
});
