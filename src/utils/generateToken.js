import jwt from 'jsonwebtoken'

const generateToken = userId => {
  return jwt.sign(
    {
      userId
    },
    'thisisasecret',
    {
      expiresIn: '7d'
    }
  )
}

export default generateToken
