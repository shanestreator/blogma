import jwt_decode from 'jwt-decode'
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  SIGNUP_USER,
  LOGIN_USER,
  LOGOUT_USER
} from './types'

// -------------------------- SIGNUP --------------------------
export const signupUser = () => ({
  type: SIGNUP_USER
})

export const createUser = token => async dispatch => {
  try {
    if (token) {
      dispatch(signupUser())
    }
  } catch (error) {
    console.log('ERROR: ', error)
  }
}

// -------------------------- LOGIN --------------------------
export const loginAuth = () => ({
  type: LOGIN_USER
})

// Login - Get User Token
export const loginUser = token => async dispatch => {
  try {
    if (token) {
      dispatch(loginAuth())
    }
  } catch (error) {
    console.log('ERROR: ', error)
  }
}

// -------------------------- LOGOUT --------------------------
export const logoutAuth = () => ({
  type: LOGOUT_USER
})

// Login - Get User Token
export const logoutUser = token => async dispatch => {
  try {
    if (token) {
      dispatch(logoutAuth())
    }
  } catch (error) {
    console.log('ERROR: ', error)
  }
}
