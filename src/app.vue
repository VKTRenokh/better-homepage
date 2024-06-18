<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const BHeader = defineAsyncComponent(() => import('./components/b-header.vue'))
</script>

<template>
  <Transition name="header">
    <b-header></b-header>
  </Transition>
</template>

<style scoped>
h1 {
  font-family: 'FiraCode';
}

.header-enter-active {
  transition: 0.7s ease;
}

.header-enter-from {
  opacity: 0;
}

.header-enter-to {
  opacity: 1;
}
</style>
