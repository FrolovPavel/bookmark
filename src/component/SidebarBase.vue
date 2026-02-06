<script setup lang="ts">
import ProfileAvatar from '@/component/ProfileAvatar.vue';
import CategoriesList from '@/component/CategoriesList.vue';
import ButtonBase from '@/component/ui/ButtonBase.vue';
import { useCategoriesStore } from '@/stors/categories.store';
import { useProfileStore } from '@/stors/profile.store';
import { onMounted } from 'vue';
import { useAuthStore } from '@/stors/auth.store';

const storeProfile = useProfileStore();
const storeCategories = useCategoriesStore();
const storeAuth = useAuthStore();

onMounted(() => {
  storeCategories.getCategories();
  storeProfile.getProfile();
});
</script>

<template>
  <aside class="sidebar">
    <ProfileAvatar
      v-if="storeProfile.profile"
      :profile="storeProfile.profile"
    />
    <CategoriesList
      v-if="storeCategories.categories"
      :categories="storeCategories.categories"
    />
    <ButtonBase
      size="big"
      type="text"
      @click="storeCategories.addCategory"
    >
      Добавить
    </ButtonBase>
    <ButtonBase
      size="big"
      type="text"
      @click="storeAuth.onLogout"
    >
      Выход
    </ButtonBase>
  </aside>
</template>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: 16px;
}
</style>
