const express    = require('express');
const router     = express.Router();
const nodemailer = require('nodemailer');
var Request      = require('request');


router.get('/', async (req, res) => {
    const transporter = configuration();
    const mailOptions = getOptions();

    try {
        transporter.sendMail(mailOptions, function(error, info){
            if (error) { throw new Error(error); }
            else { res.send('Email enviado: ' + info.response); }
        });
    } catch(error) {
        res.status(400).send(error);
    }
});

router.get('/test', async (req, res) => {
    Request('https://pokeapi.co/api/v2/pokemon/1/', (error, response, body) => {
        if(error) {
            res.status(400).send(error);
        }
        res.send(JSON.parse(body));
    });
});

function configuration() {
    const transporter = nodemailer.createTransport({
        // host: "mail.diegopinho.com.br",
        // port: 25,
        // secure: false, // true for 465, false for other ports
        // auth: {
        //     user: "no-reply@diegopinho.com",
        //     pass: "senhaqualquerdeteste"
        // },
        // tls: { rejectUnauthorized: false }

        // Or
        service: 'gmail',
        auth: {
            user: "your@gmail.com",
            pass: "yourPassword"
        }
    });    

    return transporter;
}

function getOptions() {
    const mailOptions = {
        from: 'no-reply@ricardoapi.net',
        to: 'ricardo@ricardowebdev.com.br',
        subject: 'E-mail enviado usando Node!',
        html: `<h1>Olá, sou um e-mail disparado com o nodejs</h1>
               <p>Simples teste de um e-mail enviado via API</p>`
    };    
    return mailOptions;
}

module.exports = router;