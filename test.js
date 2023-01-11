require('dotenv').config();

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

const testSendMail = () => {
    const {sendEmail} = require('./src/utils/email/sendEmail.js')

    // Defina os detalhes do email
    const message = {
        from: 'sistema@arvoredaimaginacao.com.br',
        to: 'isaacboratino@gmail.com',
        subject: 'Forgot',
        template: 'forgot',
        context: {
            name: 'Nome do destinatário',
        },
    };
    
    // Envie o email
    sendEmail.sendMail(message, (error, info) => {
        if (error) {
        console.log(error);
        } else {
        console.log(`Email enviado com sucesso: ${info.response}`);
        }
    });
}

testSendMail();
//testMysql();
//testMongodb();
//test();