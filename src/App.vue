<script setup lang="ts">
import MeditationsList from '@/components/meditations-list/meditations-list.vue'
</script>

<template>
  <main class="app">
    <div class="profile"></div>
    <div class="content">
      <MeditationsList/>
    </div>


  </main>
</template>

<style scoped>
.app {
  display: flex;
  gap: 100px;
  max-width: 1440px;

  margin: 60px auto 0; /* упрощённый синтаксис */
}


@media screen and (max-width: 1440px) {
  .app {
    max-width: 1280px;
  }
}
</style>
