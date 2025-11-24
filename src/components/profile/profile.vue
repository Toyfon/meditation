<script setup lang="ts">
import IconCalmly from '@/icons/icon-calmly.vue'
import IconRelaxed from '@/icons/icon-relaxed.vue'
import IconFocused from '@/icons/icon-focused.vue'
import IconAnxious from '@/icons/icon-anxious.vue'
const feelings = [
  { label: 'Спокойно', icon: IconCalmly },
  { label: 'Расслабленно', icon: IconRelaxed},
  { label: 'Фокусированно', icon: IconFocused },
  { label: 'Тревожно', icon: IconAnxious },
]
</script>

<template>
  <div class="profile">
    <img src="/avatar.png" alt="avatar" />
    <div class="profile__greeting">
      <h2 class="profile__greeting__text">Добро пожаловать, Наталья!</h2>
      <h2 class="profile__greeting__question">Как вы сегодня себя чувствуете?</h2>
    </div>

    <div class="profile__feeling">
      <div v-for="feeling in feelings" :key="feeling.label" class="profile__feeling__item">
        <div class="profile__feeling__item__icon_box">
          <component :is="feeling.icon" />
        </div>
        <p>{{ feeling.label }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile {
  min-width: 370px;
}
.profile__greeting {
  margin-top: 40px;
}

.profile__greeting__text {
  font-weight: 500;
  font-size: 30px;
}
.profile__greeting__question {
  font-weight: 400;
  font-size: 22px;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 8px;
}
.profile__feeling {
  display: flex;
  align-items: center;
  gap: 18px;
  margin-top: 40px;
}

.profile__feeling__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  font-size: 12px;
}

.profile__feeling__item__icon_box {
  background: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  width: 62px;
  height: 65px;
  opacity: 0.9;
}

</style>
