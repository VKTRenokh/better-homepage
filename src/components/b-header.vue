<script setup lang="ts">
import { useUserStore } from '@/stores/user'

const user = useUserStore()
</script>

<template>
  <header>
    <h1>Hello {{ user.userName }}</h1>
    <input type="text" placeholder="Test" v-model.lazy="user.userName" />
  </header>
</template>

<style>
h1 {
  font-family: 'FiraCode';
  font-weight: normal;
}
</style>
