<script setup lang="ts">
import Navbar from '@/components/navbar/navbar.vue'
</script>

<template>
  <div class="app">
    <Navbar />
    <main class="main">
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  flex-direction: column;
  gap: 48px;
  max-width: 1440px;
  margin: 60px auto 0;
}

@media screen and (max-width: 1440px) {
  .app {
    max-width: 1280px;
  }
}
</style>
