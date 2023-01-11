

const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

// Crie um transporte usando o serviço de email de sua escolha (por exemplo, o Gmail)
const transport = nodemailer.createTransport({
    host: process.env.MAILER_HOST,
    port: 465,
    secure: true, // use SSL
    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS
    }
});

// Configure o express-handlebars como o engine de templates
const handlebarsOptions = {
  viewEngine: {
    extName: '.hbs',
    partialsDir: './templates/',
    layoutsDir: './templates/',
    defaultLayout: '',
  },
  viewPath: './templates/',
  extName: '.hbs',
};

transport.use('compile', hbs(handlebarsOptions));

module.exports = {
    sendEmail: transport
}