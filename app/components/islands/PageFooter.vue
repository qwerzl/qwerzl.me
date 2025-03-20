<template>
  <div class="mt-30 flex items-center justify-around border-t border-border py-10 opacity-80">
    <div>
      <em>Tom Tang</em>
    </div>
    <div class="flex flex-col items-end">
      <div>
        <NuxtLink to="https://nuxt.com/team" external target="_blank">
          nuxt
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="https://github.com/qwerzl" external target="_blank">
          github
        </NuxtLink>
      </div>
      <div>
        <NuxtLink to="https://bsky.app/profile/qwerzl.me" external target="_blank">
          bsky
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  @apply underline duration-240 decoration-foreground/40 hover:decoration-foreground underline-offset-2;
}
</style>
