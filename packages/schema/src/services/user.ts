import { type } from 'arktype'

export const UserSignInSchema = type({
  login: 'string',
  password: 'string',
})

export const UserCreateSchema = type({
  name: 'string?',
  login: '2 <= string <= 50',
  password: '2 <= string <= 50',
})
export type UserCreate = typeof UserCreateSchema.infer
