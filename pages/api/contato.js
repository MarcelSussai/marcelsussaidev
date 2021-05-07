const nodemailer = require('nodemailer');
export default async function (req, res) {
  
  console.log(req.body);
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: 'marcelsussaidev@gmail.com',
      pass: process.env.PASS,
    },
    secure: true,
  });

  // transporter.verify(function(error, success) {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log("Server is ready to take our messages", success);
  //   }
  // });

  const mailData = {
    from: 'marcelsussaidev@gmail.com',
    to: 'marcelsussai@gmail.com, marcelsussaidev@gmail.com, marcelsussaideoliveira@hotmail.com',
    subject: `Mensagem de marcelsussai.dev! - ${req.body.name}`,
    text: req.body.msg + ' | Enviado de: ' + req.body.email,
    html: `
      <h5> ${req.body.msg} </h5>
      <h6> Enviado de: ${req.body.email} </h6>
    `
  };

  const mailData2 = {
    from: 'marcelsussaidev@gmail.com',
    to: req.body.email,
    subject: `Mensagem de marcelsussai.dev! - ${req.body.name}`,
    text: req.body.msg + ' | Obrigado por ' + req.body.email,
    html: `
    <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Marcel Sussai desenvolvedor fullstack</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </head>
      
      <body style="padding:32px;">
        <h1 style="color:#57742f;font-family:sans-serif;">
          Obrigado 
          <span style="color:#21507e;font-size:40px;"> ${req.body.name} </span> 
          por entrar em contato!
        </h1>
        <p style="line-height:1.5;color:#161616;font-family:sans-serif;font-size:20px;">
          Logo mais, estarei lendo e respondendo seu email, <br>
          novamente, grato pela sua mensagem <br>
          Se quiser, pode me enviar mais detalhes sobre sua necessidade digital, <br>
          se gostou do meu atendimento, me recomende para quem tem necessidades digitais <br>
          que você conheça, se não gostou, me mande sua sugestão!
        </p>
      </body>
    </html>
    `
  };

  await transporter.sendMail(mailData, function (err, info) {
    // console.log(info);
    if(err) { 
      console.log(err); 
    } else {
      console.log('1º - check');
      res.status(200).json(req.body);
      return info;
    }
  });
  await transporter.sendMail(mailData2, function (err, info) {
    // console.log(info);
    if(err) { 
      console.log(err); 
    } else {
      console.log('2º - check');
      res.status(200).json(req.body);
      return info;
    }
  });
  // res.status(200).json(req.body);
};