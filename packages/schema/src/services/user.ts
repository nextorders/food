import { type } from 'arktype'

export const UserSignIn = type({
  login: 'string',
  password: 'string',
})

export const UserCreate = type({
  name: 'string?',
  login: '2 <= string <= 50',
  password: '2 <= string <= 50',
})
