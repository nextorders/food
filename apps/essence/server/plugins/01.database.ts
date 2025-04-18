import process from 'node:process'
import { useCreateDatabase } from '../services/db/database'

/**
 * DB init
 */
export default defineNitroPlugin(async () => {
  if (!process.env.NUXT_DATABASE_URL) {
    throw new Error('NUXT_DATABASE_URL is not defined')
  }

  useCreateDatabase(process.env.NUXT_DATABASE_URL)
})
