import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  clean: true,
  externals: [
    '@paralleldrive/cuid2',
  ],
})
