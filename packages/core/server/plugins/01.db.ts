import redisDriver from 'unstorage/drivers/redis'

export default defineNitroPlugin(() => {
  const { redisUrl: url } = useRuntimeConfig()

  const driver = redisDriver({ url })

  useStorage().mount('db', driver)
})
