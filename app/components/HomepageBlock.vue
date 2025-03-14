<script lang="ts" setup>
interface Item {
  title: string
  description: string
  link: string
}

const props = defineProps<{
  title: string
  items?: Item[]
  moreUrl?: string
}>()
</script>

<template>
  <div class="grid h-full w-80 flex-none pb-4">
    <div class="top-0 z-10 col-start-1 row-start-1 h-30 w-40 flex select-none from-background to-background/0 bg-gradient-to-br">
      <em class="">> </em>
      <em class="ml-2 underline opacity-80">{{ props.title }}</em>
    </div>
    <div class="block-shadow col-start-1 row-start-1 mt-3 h-full items-center border rounded">
      <div class="relative z-30 h-full px-4 pb-2 pt-6 space-y-4">
        <div v-if="props.items === undefined" class="h-full flex select-none items-center justify-center text-foreground/70">
          <div><em>Coming soon...</em></div>
        </div>
        <div v-for="item in props.items" v-else :key="item.title">
          <NuxtLink :to="item.link" external target="none">
            {{ item.title }}
          </NuxtLink>
          <div class="text-sm opacity-60">
            {{ item.description }}
          </div>
        </div>
        <div class="text-foreground/50">
          <NuxtLink
            v-if="props.moreUrl"
            class="select-none text-xs text-foreground/50 hover:text-foreground"
            :to="props.moreUrl"
          >
            <em>view more...</em>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.block-shadow {
  box-shadow: 1px 1px 1px 1px rgb(0 0 0 / 0.02);
}
@media (prefers-color-scheme: dark) {
  .block-shadow {
    box-shadow: 1px 1px 1px 1px rgb(0 0 0 / 0.1);
  }
}
</style>
