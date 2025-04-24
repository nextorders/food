import type { Page } from '../../../types/food'

export async function getPage(id: string): Promise<Page | null> {
  return useStorage('db').getItem<Page>(`page:${id}`)
}

export async function getPages(keys: string[]): Promise<Page[]> {
  const pageStorage = new Map<string, unknown>(keys.map((key) => [key, useStorage('db').getItem(key)]))
  const pages: Page[] = []

  for (const key of keys) {
    const page = await pageStorage.get(key) as Page
    if (!page) {
      continue
    }

    pages.push(page)
  }

  return pages
}

export async function patchPage(id: string, data: Partial<Page>): Promise<Page | null> {
  const page = await getPage(id)
  if (!page) {
    return null
  }

  const newPage = {
    ...page,
    ...data,
    updatedAt: new Date().toISOString(),
  }

  await useStorage('db').setItem(`page:${id}`, newPage)

  return getPage(id)
}

export async function createPage(data: Omit<Page, 'createdAt' | 'updatedAt'>): Promise<Page | null> {
  await useStorage('db').setItem(`page:${data.id}`, {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })
  return getPage(data.id)
}

export async function deletePage(id: string): Promise<void> {
  await useStorage('db').removeItem(`page:${id}`)
}
