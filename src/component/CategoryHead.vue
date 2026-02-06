<script setup lang="ts">
import ButtonBase from '@/component/ui/ButtonBase.vue';
import IconEdit from '@/component/icons/IconEdit.vue';
import IconTrash from '@/component/icons/IconTrash.vue';
import { ref, watch } from 'vue';
import InputBase from '@/component/ui/InputBase.vue';
import IconOk from '@/component/icons/IconOk.vue';
import type { Category } from '@/interfaces/categories.interface';
import { useCategoriesStore } from '@/stors/categories.store';
import { useRouter } from 'vue-router';

const { category } = defineProps<{ category: Category }>();

const router = useRouter();

const store = useCategoriesStore();

const isEdit = ref(false);
const categoryName = ref(category.name);

watch(
  () => category,
  () => {
    isEdit.value = false;
    categoryName.value = category.name;
  },
);

function toggleEdit() {
  isEdit.value = !isEdit.value;
}

function onEditCategory() {
  if (!categoryName.value) {
    return;
  }
  store.editCategory(categoryName.value, category);
  toggleEdit();
}

function onRemoveCategory() {
  store.removeCategory(category.id);
  router.push({ name: 'main' });
}
</script>

<template>
  <div class="head">
    <div
      v-if="isEdit"
      class="head__input"
    >
      <InputBase v-model="categoryName" />
      <ButtonBase
        size="small"
        @click="onEditCategory"
      >
        <IconOk />
      </ButtonBase>
    </div>
    <h1
      v-else
      class="head__title"
    >
      {{ category.name }}
    </h1>
    <div class="head__actions">
      <ButtonBase
        size="small"
        @click="toggleEdit"
      >
        <IconEdit />
      </ButtonBase>
      <ButtonBase
        size="small"
        @click="onRemoveCategory"
      >
        <IconTrash />
      </ButtonBase>
    </div>
  </div>
</template>

<style scoped lang="scss">
.head {
  display: flex;
  justify-content: space-between;
  margin-bottom: 60px;

  &__input {
    display: flex;
    gap: 8px;
  }

  &__title {
    font-size: 24px;
    font-weight: 500;
  }

  &__actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }
}
</style>
