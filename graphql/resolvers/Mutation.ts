import { Context } from "../context"

export const Mutation = {
    //Category
    createCategory: async (_, { data }, ctx: Context) => {
        return await ctx.prisma.category.create({
            data: {
                ...data
            }
        })
    },
    updateCategory: async (_, { id }, ctx: Context) => {

        return ctx.prisma.category.update({
            where: { id: Number(id) || undefined },
            data: {
                ...data
            },
        })

    },
    deleteCategory: async (_, { id }, ctx: Context) => {

        return await ctx.prisma.category.delete({
            where: { id: Number(id) || undefined }
        })

    },
    deleteAllCategory: async (_, __, ctx: Context) => {

        return await ctx.prisma.category.deleteMany()

    },
    //Product
    createProduct: async (_, { data }, ctx: Context) => {
        return await ctx.prisma.product.create({
            data: {
                ...data
            }
        })
    },
    updateProduct: async (_, { id, data }, ctx: Context) => {

        return ctx.prisma.product.update({
            where: { id: Number(id) || undefined },
            data: {
                ...data
            },
        })

    },
    deleteProduct: async (_parent, args, ctx: Context) => {

        return await ctx.prisma.product.delete({
            where: { id: Number(args.id) || undefined }
        })

    },
    deleteAllProduct: async (_parent, args, ctx: Context) => {

        return await ctx.prisma.product.deleteMany()

    },
}