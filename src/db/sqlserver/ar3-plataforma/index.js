const { PrismaClient } = require("../../../../prisma/@generated/prisma/sqlserver/ar3plataforma")

const prismaClient = new PrismaClient()

  module.exports = {
    prismaClient: prismaClient,
    prismaClientSSAr3: prismaClient
  }