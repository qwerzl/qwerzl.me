<script setup lang="ts">
const homepageBlocks = useTemplateRef<HTMLElement>('homepageBlocks')
onMounted(() => {
  homepageBlocks.value?.scrollTo({
    left: homepageBlocks.value.scrollWidth / 2 - homepageBlocks.value.clientWidth / 2,
  })
})

useHead({
  title: 'Home | qwerzl\'s Site',
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center py-2 font-sans">
    <div class="w-full">
      <div class="w-full flex justify-center px-6">
        <div>
          <div class="data-animate select-none" style="--stagger: 0;">
            <em>Tom Tang</em>
          </div>
          <div class="data-animate mt-12" style="--stagger: 1;">
            <p>
              Student, Developer, Nuxt.js Ecosystem Member.
            </p>
            <p class="mt-2">
              Find me on
              <NuxtLink to="https://github.com/qwerzl" external target="none">
                GitHub
              </NuxtLink>,
              <NuxtLink to="https://bsky.app/profile/qwerzl.me" external target="none">
                Bluesky
              </NuxtLink>
              or <NuxtLink to="mailto:me@qwerzl.me" external target="none">
                me@qwerzl.me
              </NuxtLink>.
            </p>
          </div>
        </div>
      </div>
      <div class="relative left-1/2 grid mt-12 -translate-x-1/2">
        <!-- Left/Right Arrows -->
        <div class="min-[68rem]:hidden">
          <Icon name="material-symbols:chevron-left" class="absolute left-2 top-1/2 z-50 border rounded-full" @click="homepageBlocks?.scrollBy({ left: -320, behavior: 'smooth' })" />
          <Icon name="material-symbols:chevron-right" class="absolute right-2 top-1/2 z-50 border rounded-full" @click="homepageBlocks?.scrollBy({ left: 320, behavior: 'smooth' })" />
        </div>
        <div class="scroll-area h-full w-screen flex justify-center overflow-x-hidden">
          <div
            ref="homepageBlocks"
            class="no-scrollbar data-animate h-full flex snap-x overflow-x-scroll px-1/3 space-x-8 min-[68rem]:px-0"
            style="--stagger: 2;"
          >
            <HomepageBlock
              title="researches"
              class="snap-center"
            />
            <HomepageBlock
              title="projects"
              class="snap-center"
              :items="[
                { title: 'Nuxt Fonts', description: 'Plug-and-play fonts optimization for Nuxt apps.', link: 'https://github.com/nuxt/fonts' },
                { title: 'unifont', description: 'Framework agnostic tools for accessing data from font CDNs and providers', link: 'https://github.com/unjs/unifont' },
              ]"
              more-url="https://github.com/qwerzl"
            />
            <HomepageBlock
              title="posts"
              class="snap-center"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

@keyframes enter {
  0% {
    opacity: 0;
    transform: translateY(10px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
}

@layer utilities {
  .data-animate {
    animation: enter .6s both;
    animation-delay: calc(var(--stagger) * var(--delay) + var(--start));
    --stagger: 0;
    --delay: 120ms;
    --start: 150ms;
  }
  .scroll-area {
    --scrollbar-padding: 40px;
    --scrollbar-size: 6px;
    --gradient-size-start: var(--body-margin-left);
    --gradient-size-end: var(--body-margin-right);
    --body-margin-left: max(60px,env(safe-area-inset-left));
    --body-margin-right: max(60px,env(safe-area-inset-right));
    -webkit-mask-image: linear-gradient(to right,transparent 0,#000 var(--gradient-size-start),#000 calc(100% - var(--gradient-size-end)),transparent 100%);
    mask-image: linear-gradient(to right,transparent 0,#000 var(--gradient-size-start),#000 calc(100% - var(--gradient-size-end)),transparent 100%);
  }
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

a {
  @apply underline duration-240 decoration-foreground/40 hover:decoration-foreground underline-offset-2;
}
</style>
