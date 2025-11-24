<script setup lang="ts">
import { useMeditationStore } from '@/stores/meditation.store.ts'
import Button from '@/components/button/button.vue'
import IconPlay from '@/icons/icon-play.vue'
import { onMounted } from 'vue'

const store = useMeditationStore()

onMounted(() => {
  store.getMeditations()
})
</script>

<template>
  <div class="meditations-list">
    <div v-for="item in store.meditations" :key="item.id" class="meditations-list__item">
      <h3 class="meditations-list__item__title">{{ item.title }}</h3>
      <p>{{ item.description }}</p>

      <div class="meditations-list__item_footer">
        <Button variant="secondary">
          Начать
          <IconPlay />
        </Button>
        <span>{{ item.duration_min }} мин</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.meditations-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(auto, 1fr));
  gap: 24px;
}
.meditations-list__item {
  padding: 24px 30px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background: var(--color-bg-card);
  color: var(--color-primary-inverted);
  font-size: 15px;
  font-weight: 500;
  word-break: break-word;
  border-radius: 20px;
  max-width: 340px;
}
.meditations-list__item__title {
  font-size: 25px;
}

.meditations-list__item_footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
</style>
