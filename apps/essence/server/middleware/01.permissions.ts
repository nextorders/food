import type { PermissionCode } from '@nextorders/schema'
import type { H3Event } from 'h3'

type ProtectedRoute = {
  path: string
  methods: ('GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'TRACE')[]
  requiredPermissions: PermissionCode[]
}

const commonMethodsToProtect = ['POST', 'PATCH', 'DELETE'] as ProtectedRoute['methods']

const protectedRoutes: ProtectedRoute[] = [
  {
    path: '/api/channel',
    methods: commonMethodsToProtect,
    requiredPermissions: ['MANAGE_OPTIONS', 'MASTER'],
  },
  {
    path: '/api/menu',
    methods: commonMethodsToProtect,
    requiredPermissions: ['MANAGE_MENUS', 'MASTER'],
  },
  {
    path: '/api/option',
    methods: commonMethodsToProtect,
    requiredPermissions: ['MANAGE_OPTIONS', 'MASTER'],
  },
  {
    path: '/api/product',
    methods: commonMethodsToProtect,
    requiredPermissions: ['MANAGE_PRODUCTS', 'MASTER'],
  },
  {
    path: '/api/user',
    methods: commonMethodsToProtect,
    requiredPermissions: ['MANAGE_WAREHOUSES', 'MASTER'],
  },
]

export default defineEventHandler(async (event) => {
  const token = getHeader(event, 'Authorization')
  const permissions = token ? await getPermissionsFromKey(token) : await getPermissionsFromSession(event)

  for (const route of protectedRoutes) {
    if (event.path.startsWith(route.path) && route.methods.includes(event.method)) {
      if (!route.requiredPermissions.some((permission) => permissions.includes(permission))) {
        throw errorResolver(createError({ statusCode: 403, message: 'Not allowed' }))
      }
    }
  }
})

async function getPermissionsFromKey(bearerToken: string): Promise<PermissionCode[]> {
  const { externalApiToken } = useRuntimeConfig()
  const token = bearerToken.startsWith('Bearer ') ? bearerToken.substring(7) : bearerToken

  if (externalApiToken?.length > 0 && token === externalApiToken) {
    return ['MASTER']
  }

  return []
}

async function getPermissionsFromSession(event: H3Event): Promise<PermissionCode[]> {
  const { user } = await getUserSession(event)
  return user?.permissions || []
}
