import s3Driver from 'unstorage/drivers/s3'

export default defineNitroPlugin(() => {
  const { s3 } = useRuntimeConfig()

  const driver = s3Driver({
    bucket: s3.bucket,
    region: s3.region,
    endpoint: s3.endpoint,
    accessKeyId: s3.accessKeyId,
    secretAccessKey: s3.secretAccessKey,
  })

  useStorage().mount('s3', driver)
})
