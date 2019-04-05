import { LOGIN_USER, LOGOUT_USER, SIGNUP_USER } from '../Actions/types'

import isEmpty from '../../Validation/is-empty'

const initialState = {
  isAuthenticated: false,
  user: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SIGNUP_USER: {
      return {
        ...state,
        isAuthenticated: true
      }
    }
    case LOGIN_USER: {
      return {
        ...state,
        isAuthenticated: true
      }
    }
    case LOGOUT_USER: {
      return {
        ...state,
        isAuthenticated: false
      }
    }
    default: {
      return state
    }
  }
}
