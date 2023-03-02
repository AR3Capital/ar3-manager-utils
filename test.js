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

const testSqlServer = async () => {
    const {prismaClientSSAr3} = require('./index').ssAr3;
    console.table(await prismaClientSSAr3.Cedente.findMany());
}

const testHarpia = async () => {
    const {prismaClientSSHarpia} = require('./index').ssHarpia;
    console.table(await prismaClientSSHarpia.CadConfiguracoes.findMany());
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

const generatePass = () => {
    const stringUtils = require('./index').stringUtils;
    const pass = stringUtils.password.cryptMD5('minhasenha');
    const passConfirm = stringUtils.password.cryptMD5('minhasenha');
    console.log('senha ', {
        pass,
        passConfirm,
        isEquals: pass === passConfirm
    });
}

const generateCode = () => {
    const stringUtils = require('./index').stringUtils;
    const code = stringUtils.code.generateCodeSixLetterNumber();
    console.log('code ', code);
}

testHarpia();
//generatePass();
//generateCode();
//testSqlServer();
//testSendMail();
//testMysql();
//testMongodb();
//test();