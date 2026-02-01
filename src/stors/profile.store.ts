import { defineStore } from 'pinia';
import profileApi from '../api/profileApi';
import { ref } from 'vue';
import type { Profile } from '@/interfaces/profile.interface';

export const useProfileStore = defineStore('profile', () => {
  const profile = ref<Profile>();

  async function setProfile() {
    const { data } = await profileApi.getProfile()
    profile.value = data;
  }

  return { profile, setProfile };
});
