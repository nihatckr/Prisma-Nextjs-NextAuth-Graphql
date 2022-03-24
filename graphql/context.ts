import { PrismaClient } from '@prisma/client'
import prisma from '../lib/prisma'
import type { NextApiRequest, NextApiResponse } from 'next'
import { PubSub } from 'graphql-subscriptions';

const pubsub = new PubSub();

export type Context = {
    prisma: PrismaClient
    pubsub: any

}
export async function createContext(req: NextApiRequest, res: NextApiResponse): Promise<Context> {
    return {
        prisma,
        pubsub

    }
}