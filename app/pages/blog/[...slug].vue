<script lang="ts" setup>
const route = useRoute()
const { data: page } = await useAsyncData(route.path, () => {
  return queryCollection('blog').path(route.path).first()
})
</script>

<template>
  <div class="w-full flex justify-center px-10">
    <div v-if="page" class="prose mt-80">
      <div class="flex items-start">
        <div class="relative h-min w-10 flex text-sm opacity-80 -left-4 -top-10 min-[990px]:top-0 min-[990px]:mt-0.2 space-x-0.5 min-[990px]:-left-30">
          <div class="h-min bg-foreground text-background">
            <Icon name="material-symbols:arrow-insert" class="mt-0.5 flex-none" />
          </div>
          <NuxtLink to="../" class="text-[17px] leading-normal font-serif italic">
            Back
          </NuxtLink>
        </div>
        <div class="relative -left-10">
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
        </div>
      </div>
      <ContentRenderer class="mt-10 max-w-prose bg-background" :value="page" />
    </div>
    <template v-else>
      <div class="empty-page">
        <h1>Page Not Found</h1>
        <p>Oops! The content you're looking for doesn't exist.</p>
        <NuxtLink to="/">
          Go back home
        </NuxtLink>
      </div>
    </template>
  </div>
  <NuxtIsland name="PageFooter" class="mt-10 w-screen" />
</template>
