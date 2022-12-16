const testMysql = async () => {
    const {prismaClient} = require('./index').mysql;
    console.table(await prismaClient.auditoria.findMany());   
}

const testMongodb = async () => {
    const {prismaClient} = require('./index').mongodb;
    console.table(await prismaClient.providerClients.findMany());   
}

const test = async () => {
    const prismaMysql = require('./index').mysql.prismaClient;
    const prismaMongodb = require('./index').mongodb.prismaClient;    
    console.table(await prismaMysql.auditoria.findMany())
    console.table(await prismaMongodb.providerClients.findMany())
}

testMysql();
testMongodb();
test();