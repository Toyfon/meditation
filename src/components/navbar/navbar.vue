<script setup lang="ts">
import Logo from '@/icons/logo.vue'
import Links from '@/components/navbar/links.vue'
</script>

<template>
  <div class="navbar">
    <Logo />
    <Links />
  </div>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}
</style>
