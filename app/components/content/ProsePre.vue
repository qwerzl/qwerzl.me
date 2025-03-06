<template>
  <div class="mt-6 overflow-hidden border rounded-lg bg-black/10">
    <div class="h-[48px] flex items-center border-b bg-black/10 pl-[12px] pr-[16px]">
      <div class="text-xs font-mono italic">
        {{ props.language }}
      </div>
    </div>
    <pre :class="$props.class" class="p-[20px] text-sm"><slot /></pre>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  code: {
    type: String,
    default: ''
  },
  language: {
    type: String,
    default: null
  },
  filename: {
    type: String,
    default: null
  },
  highlights: {
    type: Array as () => number[],
    default: () => []
  },
  meta: {
    type: String,
    default: null
  },
  class: {
    type: String,
    default: null
  }
})
</script>

<style>
pre code .line {
  display: block;
}
</style>