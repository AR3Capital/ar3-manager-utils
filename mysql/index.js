const { PrismaClient } = require("../@generated/prisma/clientMysql")

const prismaClient = new PrismaClient()

  module.exports = {
    prismaClient: prismaClient,
    prismaClientMongodb: prismaClient
  }