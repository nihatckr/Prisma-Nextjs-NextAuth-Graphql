import { gql } from "apollo-server-micro";

export const typeDefs = gql`
 #############################<----User--->##########################
 
  type User {
    id:ID
    name: String
    email: String
    image: String
    role: Role
  }
 
  type Query {
    allUser: [User]
  }

  enum Role{
    ADMIN
    USER
  }
 #############################<----Category--->##########################
 
 type Category {
    id:ID
    title: String
    subtitle: String
  }
 
  input CreateCategoryInput{
    title:String!
    subtitle:String
  }

  input UpdateCategoryInput{
    title:String
    subtitle:String
  }
 
  type DeleteAllOutput{
    count: Int
  }
 #############################<----Product--->##########################
 
  type Product {
    id:ID
    title: String
    subtitle: String
    createdAt:Date 
    updatedAt:Date 
    price: String
    image: String
    published: Boolean
  }

  input CreateProductInput{
    title:String!
    subtitle:String
    price: String
    image: String
    published: Boolean
  }

  input UpdateProductInput{
    title:String
    subtitle:String
    price: String
    image: String
    published: Boolean
  }
 #############################<----Query--->##########################
  type Query {
    #Category
    allCategory: [Category]
    #Product
    allProduct: [Product]  
  }
  #############################<----Mutation--->##########################
  type Mutation{
    #Category
    createCategory(data:CreateCategoryInput!):Category!
    updateCategory(id:ID!,data:UpdateCategoryInput!):Category!
    deleteCategory(id:ID!):Category!
    deleteAllCategory:DeleteAllOutput!
    #Product
    createProduct(data:CreateProductInput!):Product!
    updateProduct(id:ID!,data:UpdateProductInput!):Product!
    deleteProduct(id:ID!):Product!
    deleteAllProduct:DeleteAllOutput!
  }
   #############################<----Scalar--->##########################
  scalar Date
`