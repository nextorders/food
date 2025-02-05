import process from 'node:process'
import { defineConfig } from 'drizzle-kit'
import 'dotenv/config'

if (!process.env.APP_DATABASE_URL) {
  throw new Error('APP_DATABASE_URL is not defined')
}

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/tables.ts',
  out: './migrations',
  dbCredentials: {
    url: process.env.APP_DATABASE_URL,
  },
})
