/* @flow */

export type User = {
  name: string,
  email: string,
}

export type UserState = {
  data: User,
  loading: boolean,
  loggedIn: boolean,
}
