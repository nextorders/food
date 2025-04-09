import type { H3Event } from 'h3'

type ProtectedRoute = {
  path: string
  methods: ('GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE' | 'HEAD' | 'CONNECT' | 'OPTIONS' | 'TRACE')[]
  requiredPermissions: PermissionCode[]
}

const protectedRoutes: ProtectedRoute[] = [
  {
    path: '/api/category',
    methods: ['POST', 'PATCH', 'DELETE'],
    requiredPermissions: ['MANAGE_MENUS', 'MASTER'],
  },
  {
    path: '/api/channel',
    methods: ['POST', 'PATCH', 'DELETE'],
    requiredPermissions: ['MANAGE_OPTIONS', 'MASTER'],
  },
  {
    path: '/api/checkout/list',
    methods: ['GET'],
    requiredPermissions: ['MANAGE_CHECKOUTS', 'MASTER'],
  },
  {
    path: '/api/checkout/receiver',
    methods: ['POST', 'PATCH', 'DELETE'],
    requiredPermissions: ['MANAGE_OPTIONS', 'MASTER'],
  },
  {
    path: '/api/link',
    methods: ['POST', 'PATCH', 'DELETE'],
    requiredPermissions: ['MANAGE_OPTIONS', 'MASTER'],
  },
  {
    path: '/api/menu',
    methods: ['POST', 'PATCH', 'DELETE'],
    requiredPermissions: ['MANAGE_MENUS', 'MASTER'],
  },
  {
    path: '/api/page',
    methods: ['POST', 'PATCH', 'DELETE'],
    requiredPermissions: ['MANAGE_OPTIONS', 'MASTER'],
  },
  {
    path: '/api/product',
    methods: ['POST', 'PATCH', 'DELETE'],
    requiredPermissions: ['MANAGE_PRODUCTS', 'MASTER'],
  },
  {
    path: '/api/warehouse',
    methods: ['POST', 'PATCH', 'DELETE'],
    requiredPermissions: ['MANAGE_WAREHOUSES', 'MASTER'],
  },
]

export default defineEventHandler(async (event) => {
  const token = getHeader(event, 'Authorization')
  const permissions = token ? await getPermissionsFromKey(token) : await getPermissionsFromSession(event)

  for (const route of protectedRoutes) {
    if (event.path.startsWith(route.path) && route.methods.includes(event.method)) {
      if (!route.requiredPermissions.some((permission) => permissions.includes(permission))) {
        throw errorResolver(createError({ statusCode: 403, statusMessage: 'Not allowed' }))
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
