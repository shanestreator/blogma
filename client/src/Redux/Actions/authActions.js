import axios from 'axios'
import jwt_decode from 'jwt-decode'
import setAuthToken from '../../Utils/setAuthToken'

// Types
import { GET_ERRORS, SET_CURRENT_USER } from './types'

// Register User
export const registerUser = (userData, history) => dispatch => {
  // axios
  //   .post('/admin/register', userData)
  //   .then(res =>
  //     res.status(201).json({
  //       message: 'Successfully registered'
  //     })
  //   )
  //   .catch(err =>
  //     dispatch({
  //       type: GET_ERRORS,
  //       payload: err.response.data
  //     })
  //   )
}

// Login - Get User Token
export const loginUser = (userData, history) => dispatch => {
  // axios
  //   .post('/admin/login', userData)
  //   .then(res => {
  //     // Save to localStorage
  //     const { token } = res.data
  //     localStorage.setItem('jwtToken', token) // Set token to ls
  //     setAuthToken(token) //Set token to Auth header
  //     const decoded = jwt_decode(token) // Decode token to get user data
  //     dispatch(setCurrentUser(decoded)) // Set current user
  //     history.push('/admin/products')
  //   })
  //   .catch(err =>
  //     dispatch({
  //       type: GET_ERRORS,
  //       payload: err.response.data
  //     })
  //   )
}

// Set logged in user
export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded
})

// Log user out
export const logoutUser = () => dispatch => {
  // // Remove token from localStorage
  // localStorage.removeItem('jwtToken')
  // setAuthToken(false) // Remove auth header for future requests
  // dispatch(setCurrentUser({})) // Set current user to {} which will set isAuthenticated to false
}
