<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})
</script>

<template>
  <div class="mt-40 w-full flex justify-center">
    <div v-if="page" class="prose">
      <div class="font-medium">
        {{ page.title }}
      </div>
      <div class="text-muted-foreground">
        {{ (new Date(page.date)).toLocaleDateString('en-US', {
            year: "numeric",
            month: "long",
            day: "numeric",
          }) }}
      </div>
      <ContentRenderer class="mt-10 max-w-prose" :value="page" />
    </div>
    <template v-else>
      <div class="empty-page">
        <h1>Page Not Found</h1>
        <p>Oops! The content you're looking for doesn't exist.</p>
        <NuxtLink to="/">Go back home</NuxtLink>
      </div>
    </template>
  </div>
</template>
