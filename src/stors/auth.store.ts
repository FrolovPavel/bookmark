import { defineStore } from 'pinia';
import authApi from '../api/authApi';
import type { Credentials, LoginError } from '@/interfaces/auth.interface';
import { useRouter } from 'vue-router';
import type { AxiosError } from 'axios';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const form = ref<Credentials>({
    email: '',
    password: '',
  })

  const router = useRouter();

  async function onLogin() {
    try {
      const { data } = await authApi.login(form.value)
      setToken(data.token)
      await router.push({ name: 'main' })
    } catch (error: unknown) {
      const axiosError = error as AxiosError<LoginError>
      alert(axiosError.response?.data.error)
    }
  }

  async function onLogout() {
    removeToken()
    await router.push({ name: 'auth' })
  }

  function setToken(token: string) {
    localStorage.setItem('authToken', token)
  }

  function removeToken() {
    localStorage.removeItem('authToken')
  }

  return { form, onLogin, onLogout };
});
