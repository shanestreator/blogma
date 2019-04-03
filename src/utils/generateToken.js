import jwt from 'jsonwebtoken'

const generateToken = userId => {
  return jwt.sign(
    {
      userId
    },
    process.env.PRISMA_SECRET,
    {
      expiresIn: '7d'
    }
  )
}

export default generateToken
