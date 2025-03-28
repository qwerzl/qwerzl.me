import antfu from '@antfu/eslint-config'

export default antfu({
  unocss: true,
  vue: true,
  ignores: [
    'app/components/shadcn/',
  ],
  typescript: {
    tsconfigPath: 'tsconfig.json',
  },
})
