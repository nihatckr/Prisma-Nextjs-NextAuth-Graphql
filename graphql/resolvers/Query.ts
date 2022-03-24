import { Context } from "../context"

export const Query = {
    //Category
    allCategory: async (_, __, ctx: Context) => {
        return await ctx.prisma.category.findMany()
    },
    //Product
    allProduct: async (_, __, ctx: Context) => {
        return await ctx.prisma.product.findMany()
    },
    //User
    allUser: async (_, __, ctx: Context) => {
        return await ctx.prisma.user.findMany()
    },
} 