import '@babel/polyfill/noConflict'
import { GraphQLServer, PubSub } from 'graphql-yoga'
import db from './db'
import prisma from './prisma'
import { resolvers, fragmentReplacements } from './resolvers/index'

const pubsub = new PubSub()

const logInput = async (resolve, root, args, context, info) => {
  console.log(`1. logInput: ${JSON.stringify(args)}`)
  const result = await resolve(root, args, context, info)

  return result
}

const logResult = async (resolve, root, args, context, info) => {
  const result = await resolve(root, args, context, info)
  console.log(`4. logResult: ${JSON.stringify(result)}`)
  return result
}

const middlewares = [logInput, logResult]

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  middlewares,
  context(request) {
    return {
      db,
      pubsub,
      prisma,
      request
    }
  },
  fragmentReplacements
})

server.start({ port: process.env.PORT || 4000 }, () => {
  console.log('The server is up!')
})
