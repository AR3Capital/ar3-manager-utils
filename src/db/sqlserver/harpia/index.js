const { PrismaClient } = require("../../../../prisma/@generated/prisma/sqlserver/harpia")

const prismaClient = new PrismaClient()

  module.exports = {
    prismaClient: prismaClient,
    prismaClientSSHarpia: prismaClient
  }