<script setup lang="ts">
import ButtonBase from '@/component/ui/ButtonBase.vue';
import IconPlus from '@/component/icons/IconPlus.vue';
import InputBase from '@/component/ui/InputBase.vue';
import IconOk from '@/component/icons/IconOk.vue';
import { ref } from 'vue';
import { useBookmarksStore } from '@/stors/bookmarks.store';

const store = useBookmarksStore();

const { categoryId } = defineProps<{ categoryId: number }>();

const isAdd = ref(false);

function toggleAdd() {
  isAdd.value = !isAdd.value;
}

const url = ref<string>('');

function onAddBookmark() {
  if(!url.value) { return; }
  store.addBookmark(url.value, categoryId)
  toggleAdd()
  url.value = ''
}
</script>

<template>
  <div class="add-bookmark">
    <div
      v-if="isAdd"
      class="add-bookmark__filed"
    >
      <InputBase
        v-model="url"
        placeholder="Вставьте ссылку"
      />
      <ButtonBase @click="onAddBookmark">
        <IconOk />
      </ButtonBase>
    </div>
    <ButtonBase
      v-else
      @click="toggleAdd"
    >
      <IconPlus />
    </ButtonBase>
  </div>
</template>

<style scoped lang="scss">
.add-bookmark {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px dashed;
  border-radius: 30px;
  padding: 25px;

  &__filed {
    display: flex;
    align-items: center;
    gap: 24px;
  }
}
</style>
