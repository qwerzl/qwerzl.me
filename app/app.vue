<script setup lang="ts">
import '@unocss/reset/tailwind-compat.css'
import '@/assets/css/index.css'


// Adds .dark to html
const isDark = usePreferredDark()
onMounted(() => {
  watch(isDark, (value) => {
    document.documentElement.classList.toggle('dark', value)
  }, { immediate: true })
})
</script>

<template>
  <div>
    <NuxtPage />
  </div>
</template>
