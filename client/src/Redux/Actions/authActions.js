import jwt_decode from 'jwt-decode'
import setAuthToken from '../../Utils/setAuthToken'

// Types
import { GET_ERRORS, SET_CURRENT_USER } from './types'

// Create New User
export const createUser = (userData, history) => dispatch => {}

// Login - Get User Token
export const loginUser = (userData, history) => dispatch => {}

// Set logged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded
})

// Log user out
export const logoutUser = () => dispatch => {}
