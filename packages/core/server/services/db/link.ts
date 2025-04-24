import type { Link } from '../../../types/food'

export async function getLink(id: string): Promise<Link | null> {
  return useStorage('db').getItem<Link>(`link:${id}`)
}

export async function getLinks(keys: string[]): Promise<Link[]> {
  const linkStorage = new Map<string, unknown>(keys.map((key) => [key, useStorage('db').getItem(key)]))
  const links: Link[] = []

  for (const key of keys) {
    const keyParsed = key.split(':')

    // link:id
    if (keyParsed[1] && !keyParsed[2]) {
      const link = await linkStorage.get(key) as Link
      if (!link) {
        continue
      }

      links.push(link)
    }
  }

  return links
}

export async function createLink(data: Omit<Link, 'createdAt' | 'updatedAt'>): Promise<Link | null> {
  await useStorage('db').setItem(`link:${data.id}`, {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })
  return getLink(data.id)
}

export async function patchLink(id: string, data: Partial<Link>): Promise<Link | null> {
  const link = await getLink(id)
  if (!link) {
    return null
  }

  const newLink = {
    ...link,
    ...data,
    updatedAt: new Date().toISOString(),
  }

  await useStorage('db').setItem(`link:${id}`, newLink)

  return getLink(id)
}

export async function deleteLink(id: string): Promise<void> {
  await useStorage('db').removeItem(`link:${id}`)
}
