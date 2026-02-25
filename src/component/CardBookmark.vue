<script setup lang="ts">
import IconTrash from '@/component/icons/IconTrash.vue';
import type { Bookmark } from '@/interfaces/bookmark.interface';
import ButtonBase from '@/component/ui/ButtonBase.vue';
import IconLink from '@/component/icons/IconLink.vue';
import { useBookmarksStore } from '@/stors/bookmarks.store';
import { ref } from 'vue';
import PopupConfirm from '@/component/PopupConfirm.vue';

const { image, title, url, category_id, id } = defineProps<Bookmark>();

const store = useBookmarksStore();

const isOpenPopup = ref(false);

function openLink() {
  window.open(url, '_blank');
}

function confirmRemove() {
  store.removeBookmark(category_id, id)
  isOpenPopup.value = false
}
</script>

<template>
  <article class="card-bookmark">
    <img
      :src="image"
      alt="img-bookmark"
      class="card-bookmark__img"
    />
    <p class="card-bookmark__description">
      {{ title }}
    </p>
    <div class="card-bookmark__actions">
      <ButtonBase
        border
        @click="isOpenPopup = true"
      >
        <IconTrash />
      </ButtonBase>
      <ButtonBase
        border
        @click="openLink"
      >
        <IconLink />
      </ButtonBase>
    </div>
    <PopupConfirm
      :isOpen="isOpenPopup"
      text="Хотите удалить закладку?"
      @cancel="isOpenPopup = false"
      @ok="confirmRemove"
    />

  </article>
</template>

<style scoped lang="scss">
.card-bookmark {
  display: flex;
  flex-direction: column;
  gap: 24px;
  border-radius: 30px;
  padding: 20px;
  background: colors.$fg;

  &__img {
    display: inline-block;
    border-radius: 20px;
    height: 130px;
    object-fit: cover;
  }

  &__description {
    font-weight: 500;
    color: colors.$bg;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  &__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
