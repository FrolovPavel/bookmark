import { defineStore } from 'pinia';
import profileApi from '../api/profileApi';
import { ref } from 'vue';
import type { Profile } from '@/interfaces/profile.interface';

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>();

  async function getProfile() {
    const { data } = await profileApi.fetchProfile()
    profile.value = data;
  }

  return { profile, getProfile };
});
