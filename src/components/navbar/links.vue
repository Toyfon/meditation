<script setup lang="ts">
import IconExit from '@/icons/icon-exit.vue'
import IconChart from '@/icons/icon-chart.vue'
import IconPlayOutlined from '@/icons/icon-play-outlined.vue'

const links = [
  { name: 'Медитация', path: '/', Icon: IconPlayOutlined },
  { name: 'Статистика', path: '/statistic', Icon: IconChart },
  { name: 'Выход', path: '/auth', Icon: IconExit },
]
</script>

<template>
  <nav class="nav">
    <RouterLink
      class="nav__item"
      v-for="{ path, name, Icon } in links"
      :key="path"
      exact-active-class="active"
      :to="path"
    >
      <component :is="Icon" />
      {{ name }}
    </RouterLink>
  </nav>
</template>

<style scoped>
.nav {
  display: flex;
}
.nav__item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: 92px;
  padding: 0 54px;
  font-size: 22px;
  text-decoration: none;
  color: inherit;
  transition: all 0.5s;
  opacity: 0.5;
}
.nav__item:hover,
.nav__item.active {
  opacity: 1;
  color: var(--color-primary);
}

.nav__item:not(:last-child)::after {
  content: '';
  position: absolute;
  right: 6px;
  top: 50%;
  transform: translateY(-50%);
  width: 3px;
  height: 92px;
  background: #3a5051;
}
</style>
