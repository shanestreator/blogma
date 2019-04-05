import bcrypt from 'bcryptjs'
import generateToken from '../utils/generateToken'
import getUserId from '../utils/getUserId'
import hashPassword from '../utils/hashPassword'

const Mutation = {
  async createUser(parent, args, { prisma }, info) {
    console.log('>>>-----> args: ', args)
    const password = await hashPassword(args.data.password)

    const user = await prisma.mutation.createUser({
      data: {
        ...args.data,
        password
      }
    })

    return {
      user,
      token: generateToken(user.id)
    }
  },

  async login(parent, args, { prisma }, info) {
    const { email, password } = args.data

    const user = await prisma.query.user({
      where: {
        email
      }
    })

    if (!user) {
      throw new Error('Invalid email or password')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      throw new Error('Invalid email or password')
    }

    console.log('>>>-----> USER: ', user)

    return {
      user,
      token: generateToken(user.id)
    }
  },

  async deleteUser(parent, args, { prisma, request }, info) {
    const userId = getUserId(request)

    return prisma.mutation.deleteUser(
      {
        where: {
          id: userId
        }
      },
      info
    )
  },

  async updateUser(parent, args, { prisma, request }, info) {
    const userId = getUserId(request)

    if (typeof args.data.password === 'string') {
      args.data.password = await hashPassword(args.data.password)
    }

    return prisma.mutation.updateUser(
      {
        where: {
          id: userId
        },
        data: {
          ...args.data
        }
      },
      info
    )
  },

  createPost(parent, args, { prisma, request }, info) {
    const userId = getUserId(request)

    return prisma.mutation.createPost(
      {
        data: {
          title: args.data.title,
          body: args.data.body,
          published: args.data.published,
          user: {
            connect: {
              id: userId
            }
          }
        }
      },
      info
    )
  },

  async deletePost(parent, args, { prisma, request }, info) {
    const userId = getUserId(request)
    const postExists = await prisma.exists.Post({
      id: args.id,
      user: {
        id: userId
      }
    })

    if (!postExists) {
      throw new Error('Post not found')
    }

    return prisma.mutation.deletePost(
      {
        where: {
          id: args.id
        }
      },
      info
    )
  },

  async updatePost(parent, args, { prisma, request }, info) {
    const userId = getUserId(request)
    const postExists = await prisma.exists.Post({
      id: args.id,
      user: {
        id: userId
      }
    })

    if (!postExists) {
      throw new Error('Post not found')
    }

    if (postExists && args.data.published === false) {
      prisma.mutation.deleteManyComments({
        where: {
          post: {
            id: args.id
          }
        }
      })
    }

    return prisma.mutation.updatePost(
      {
        where: {
          id: args.id
        },
        data: args.data
      },
      info
    )
  },

  async createComment(parent, args, { prisma, request }, info) {
    const userId = getUserId(request)
    const postExists = await prisma.exists.Post({
      id: args.data.post,
      published: true
    })

    if (!postExists) {
      throw new Error('Post not found')
    }

    return prisma.mutation.createComment(
      {
        data: {
          text: args.data.text,
          user: {
            connect: {
              id: userId
            }
          },
          post: {
            connect: {
              id: args.data.post
            }
          }
        }
      },
      info
    )
  },

  async deleteComment(parent, args, { prisma, request }, info) {
    const userId = getUserId(request)
    const commentExists = await prisma.exists.Comment({
      id: args.id,
      user: {
        id: userId
      }
    })

    if (!commentExists) {
      throw new Error('Comment not found')
    }

    return prisma.mutation.deleteComment(
      {
        where: {
          id: args.id
        }
      },
      info
    )
  },

  async updateComment(parent, args, { prisma, request }, info) {
    const userId = getUserId(request)

    const commentExists = await prisma.exists.Comment({
      id: args.id,
      user: {
        id: userId
      }
    })

    if (!commentExists) {
      throw new Error('Comment not found')
    }

    return prisma.mutation.updateComment(
      {
        where: {
          id: args.id
        },
        data: args.data
      },
      info
    )
  }
}

export { Mutation as default }
