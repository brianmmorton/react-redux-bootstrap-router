/* @flow */

import type { User, UserState } from './types'
import { request } from 'utils'

type Action = {
  type: string,
}

const SET_USER = 'SET_USER'
const GET_USER = 'GET_USER'
const LOGOUT = 'LOGOUT'

export default function user (state: UserState = { loading: true, isAuthenticated: false, data: null }, action: Action): UserState {

  switch (action.type) {

    case GET_USER:
      return { ...state, loading: true, }

    case SET_USER: {
      if (action.result) {
        return { ...state, loading: false, isAuthenticated: true, data: action.user }
      }
      return { ...state, loading: false, isAuthenticated: false, data: null }
    }

    case LOGOUT:
      return { ...state, loading: false, loggedIn: false, data: null }

    default:
      return state
  }
}

export const login = (email: string, password: string): Action => {
  return dispatch => {

    dispatch(getUser());

    return new Promise((resolve, reject) => {
      request.post('/auth/login')
        .send({ email, password })
        .end((err, res) => {
          if (err) {
            return reject(res);
          }

          localStorage.setItem('auth-token', res.body.token);

          dispatch(setUser(res.body.user));
          return resolve(res.body);
        })
    });
  }
}

export const fetch = (query: ?object) => {
  return dispatch => {

    dispatch(getUser());

    return new Promise((resolve, reject) => {
      request.get('/api/users')
        .query(query)
        .end((err, res) => {
          if (err) {
            if (!res || res.status === 401) {
              dispatch(setUser(null));
            }
            return reject(res);
          }

          dispatch(setUser(res.body));
          return resolve(res.body);
        })
    });
  }
}

export const logout = (): Action => {
  return dispatch => {
    return new Promise(function(resolve, reject) {
      request.get('/auth/logout')
        .end((err, res) => {
          if (err) {
            return reject(res);
          }
          dispatch(logoutUser());
          return resolve(res.body);
        })
    });
  }
}

export const logoutUser = (): Action => ({
  type: LOGOUT,
})

export const setUser = (user: User): Action => ({
  type: SET_USER,
  user
})

export const getUser = (): Action => ({
  type: GET_USER,
})
