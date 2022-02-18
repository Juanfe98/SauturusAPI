const {sendEmail} = require('./application.js');
const {createClient} = require('../services/contact.service');

function contactUs(req, res){
  createClient();
  // const sendingSuccess = sendEmail(
  //   'juanmontana1398@gmail.com', 
  //   'Test sending Email', 
  //   '<h1>This is a title</h1> <p>This is a paragraph</p>'
  // );
  // if(!sendingSuccess){
  //   res.status(500).send({message: 'There was an error sending your email'})
  //   return
  // }
  res.status(200).send({message: 'Email send successfully'})
}

module.exports = {contactUs}