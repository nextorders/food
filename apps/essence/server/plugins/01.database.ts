import process from 'node:process'
import { useCreateDatabase } from '@nextorders/database'

/**
 * DB init
 */
export default defineNitroPlugin(async () => {
  if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined')
  }

  useCreateDatabase(process.env.DATABASE_URL)
})
