import { ApolloServer } from 'apollo-server-micro';
import Cors from 'micro-cors'

import { resolvers } from '../../graphql/resolvers'
import { createContext } from '../../graphql/context';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { typeDefs } from '../../graphql/typesDefs';

const cors = Cors()

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: createContext,
    plugins: [
        ApolloServerPluginLandingPageGraphQLPlayground()
    ]
})

const startServer = apolloServer.start()

export default cors(async function handler(req, res) {
    if (req.method === 'OPTIONS') {
        res.end()
        return false
    }
    await startServer

    await apolloServer.createHandler({
        path: '/api/graphql',
    })(req, res)
})

export const config = {
    api: {
        bodyParser: false,
    },
}
