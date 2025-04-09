import { Buffer } from 'node:buffer'
import { randomBytes, scrypt, timingSafeEqual } from 'node:crypto'
import { promisify } from 'node:util'

const scryptPromise = promisify(scrypt)

export async function hash(password: string): Promise<string> {
  const salt = randomBytes(8).toString('hex')
  const derivedKey = await scryptPromise(password, salt, 64)
  return `${salt}:${(derivedKey as Buffer).toString('hex')}`
}

export async function verify(password: string, hash: string): Promise<boolean> {
  const [salt, key] = hash.split(':')
  if (!salt || !key) {
    return false
  }

  const keyBuffer = Buffer.from(key, 'hex')
  const derivedKey = await scryptPromise(password, salt, 64)
  return timingSafeEqual(keyBuffer, derivedKey as Buffer)
}
