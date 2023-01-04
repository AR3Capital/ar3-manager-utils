const { PrismaClient } = require("../../../prisma/@generated/prisma/clientMongodb")

const prismaClient = new PrismaClient()

  module.exports = {
    prismaClient: prismaClient,
    prismaCLientMysql: prismaClient
  }