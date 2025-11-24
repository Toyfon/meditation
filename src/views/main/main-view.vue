<script setup lang="ts">
import MeditationsList from '@/components/meditations-list/meditations-list.vue'
import Profile from '@/components/profile/profile.vue'
</script>

<template>
  <div class="main">
    <Profile />
    <MeditationsList/>
  </div>
</template>

<style scoped>
.main {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 54px;
  gap: 100px;
}
</style>
