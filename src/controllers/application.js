const nodemailer = require('nodemailer');

async function sendEmail(destination='', subject='', content=''){
  // Sender configuration
  const transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASS,
    },
  });

  //Sending options
  const mailData = {
    from: process.env.EMAIL_USERNAME,
    to: destination,  
    subject: subject,
    text: 'That was easy!',
    html: content,
  };

  //Execute sent
  transporter.sendMail(mailData, function (err, info) {
    if(err){
      console.log('Error --> ',err)
    }else{
      console.log(info);
    }
  });
}

module.exports = {
  sendEmail,
}