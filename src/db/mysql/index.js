const { PrismaClient } = require("../../../prisma/@generated/prisma/clientMysql")

const prismaClient = new PrismaClient()

  module.exports = {
    prismaClient: prismaClient,
    prismaClientMysql: prismaClient
  }