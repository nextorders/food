import { setChannelAsUpdated } from '../services/db/channel'

const methods = ['PATCH', 'POST', 'PUT', 'DELETE']

export default defineNitroPlugin((nitro) => {
  nitro.hooks.hook('afterResponse', async (event) => {
    if (methods.includes(event.method)) {
      const { channelId } = useRuntimeConfig()
      await setChannelAsUpdated(channelId)
    }
  })
})
