const { PrismaClient } = require("../@generated/prisma/clientMongodb")

const prismaClient = new PrismaClient()

  module.exports = {
    prismaClient: prismaClient,
    prismaCLientMysql: prismaClient
  }