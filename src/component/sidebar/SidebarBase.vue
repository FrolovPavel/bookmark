<script setup lang="ts">
import ProfileAvatar from '@/component/sidebar/ProfileAvatar.vue';
import CategoriesList from '@/component/sidebar/CategoriesList.vue';
import ButtonBase from '@/component/ui/ButtonBase.vue';
import IconPlus from '@/component/icons/IconPlus.vue';
import { useCategoriesStore } from '@/stors/categories.store';
import { useProfileStore } from '@/stors/profile.store';
import { onMounted } from 'vue';

const storeProfile = useProfileStore();
const storeCategories = useCategoriesStore();

onMounted(() => {
  storeCategories.setCategories()
  storeProfile.setProfile()
})
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
      size="small"
      @click="storeCategories.addCategories"
    >
      <IconPlus />
    </ButtonBase>
  </aside>
</template>

<style scoped lang="scss">
.sidebar {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
}
</style>
