import nodemailer from "nodemailer";
import { Service } from "typedi";

@Service()
class SendMailer{
  private emailConfiguration: {};

  constructor(){
    this.emailConfiguration = {
      port: 465,
      host: "smtp.gmail.com",
      secure: true,
      auth: {
        user: "jmontana@syseu.com",
        pass: "juansyseu@1",
      },
      logger: true,
    }
  }

  send(destination='', subject='', content=''){
    // Sender configuration
    const transporter = nodemailer.createTransport(this.emailConfiguration);

    //Sending options
    const mailData = {
      from: "juansyseu@1",
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
}

export default SendMailer;