import { createId } from '@paralleldrive/cuid2'
import { createWarehouse } from '../../../server/services/db/warehouse'
import { warehouseCreateSchema } from './../../../shared/services/warehouse'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const data = warehouseCreateSchema.parse(body)

    const warehouse = await createWarehouse({
      ...data,
      id: createId(),
    })

    return {
      ok: true,
      result: warehouse,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
