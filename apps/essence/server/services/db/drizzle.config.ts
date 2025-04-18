import process from 'node:process'
import { defineConfig } from 'drizzle-kit'
import 'dotenv/config'

export default defineConfig({
  dialect: 'postgresql',
  schema: './tables.ts',
  out: './migrations',
  dbCredentials: {
    url: process.env.NUXT_DATABASE_URL!,
  },
})
