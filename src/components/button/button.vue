<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  size?: 'small' | 'medium' | 'large'
  variant?: 'primary' | 'secondary'
}

const { size = 'medium', variant = 'primary' } = defineProps<Props>()

const sizeClasses = computed(() => {
  return {
    small: 'button--small',
    medium: 'button--medium',
    large: 'button--large',
  }[size]
})
const variantClasses = computed(() => {
  return {
    primary: 'button--primary',
    secondary: 'button--secondary',
  }[variant]
})
</script>

<template>
  <button class="button" :class="[sizeClasses, variantClasses]">
    <slot />
  </button>
</template>

<style scoped>
.button {
  padding: 10px 14px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  border-radius: 10px;
  color: var(--color-primary)
}
.button--primary {
  background: var(--color-button-primary);
}

.button--secondary {
  background: var(--color-background);
}

.button--small {
  font-size: 12px;
}

.button--medium {
  font-size: 15px;
  line-height: 120%;
}

.button--large {
  font-size: 25px;
  padding: 16px 54px;
}
</style>
