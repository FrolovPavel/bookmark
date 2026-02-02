<template>
  <main class="layout-empty">
    <slot />
  </main>
</template>

<style scoped lang="scss">
.layout-empty {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
}
</style>
