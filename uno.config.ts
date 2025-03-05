import { defineConfig, presetUno, transformerDirectives } from 'unocss'
import presetAnimations from 'unocss-preset-animations'
import { presetShadcn } from 'unocss-preset-shadcn'

export default defineConfig({
  theme: {
    fontFamily: {
      serif: 'Newsreader',
      sans: 'Inter'
    },
  },
  presets: [
    presetUno(),
    presetAnimations(),
    presetShadcn({
      darkSelector: '[data-theme="dark"]',
    }),
  ],
  transformers: [
    transformerDirectives(),
  ],
  // By default, `.ts` and `.js` files are NOT extracted.
  // If you want to extract them, use the following configuration.
  // It's necessary to add the following configuration if you use shadcn-vue or shadcn-svelte.
  content: {
    pipeline: {
      include: [
        // the default
        /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
        // include js/ts files
        '(components|src)/**/*.{js,ts}',
      ],
    },
  },
})