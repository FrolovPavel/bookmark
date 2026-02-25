<script setup lang="ts">
import ButtonBase from '@/component/ui/ButtonBase.vue';

const { isOpen, text } = defineProps<{
  isOpen: boolean;
  text: string;
}>();

const emit = defineEmits<{
  (e: 'ok'): void;
  (e: 'cancel'): void;
}>();
</script>

<template>
  <Transition name="fade">
    <Teleport to="body">
      <div
        v-if="isOpen"
        class="confirm"
      >
        {{ text }}
        <div class="confirm__action">
          <ButtonBase
            class="confirm__button"
            @click="emit('ok')"
          >
            Да
          </ButtonBase>
          <ButtonBase
            class="confirm__button"
            @click="emit('cancel')"
          >
            Нет
          </ButtonBase>
        </div>
      </div>
    </Teleport>
  </Transition>
</template>

<style scoped lang="scss">
.confirm {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  gap: 16px;
  width: fit-content;
  padding: 16px;
  background: colors.$bg;
  border-radius: 30px;
  box-shadow: 0 -2px 2px rgba(72,104,178,.04),0 2px 2px rgba(106,111,117,.09),0 1px 2px rgba(72,104,178,.08);

  &__action {
    display: flex;
    align-items: center;
    gap: 8px;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
