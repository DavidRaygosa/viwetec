'use strict'

const nodemailer = require('nodemailer');
var ejs = require('ejs');

var controller_email = 
{
	
	sendEmail: (req, res) =>
	{
		var params = req.body;
		var transporter = nodemailer.createTransport({
		service: 'gmail',
		secure: true,
		auth: 
		{
			user: 'david.raygosa97@gmail.com', // Cambialo por tu email
			pass: 'azullindo5' // Cambialo por tu password
			}
		});

		ejs.renderFile('../backend/views/Email.ejs', { params }, function (err, data) 
		{
			if (err) 
			{
				console.log(err);
			} 
			else 
			{
				const mailOptions = 
				{
					from: 'ViweTec.com <${params.email}>',
					to: 'elmundo_loco@hotmail.com', // Cambia esta parte por el destinatario
					subject: 'Mensaje de la Pagina Web',
					html: data
				};
				transporter.sendMail(mailOptions, (err, info) =>
				{
					if(err) return res.status(200).send({message:'Error Al Enviar Correo'});
					else return res.status(200).send({message:'Correo Enviado'});
				});
			}
		});
	}
}

module.exports = controller_email;