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
  const { user } = await getUserSession(event)
  const userPermissions = user?.permissions || []

  for (const route of protectedRoutes) {
    if (event.path.startsWith(route.path) && route.methods.includes(event.method)) {
      if (!route.requiredPermissions.some((permission) => userPermissions.includes(permission))) {
        throw errorResolver(createError({ statusCode: 403, statusMessage: 'Not allowed' }))
      }
    }
  }
})
