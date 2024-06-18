<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const user = useUserStore()
</script>

<template>
  <header>
    <h1>Header {{ user.userName }}</h1>
  </header>
</template>

<style>
h1 {
  font-family: 'FiraCode';
  font-weight: normal;
}
</style>
