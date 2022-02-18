const ClientModel = require("../models/Client");

/*
  * if you need to make calls to additional tables, data stores (Redis, for example), 
  * or call an external endpoint as part of creating the blogpost, add them to this service
*/
const createClient = async () => {
  try {
    const newClient = new ClientModel({
      name: 'Juan Felipe',
      email: 'juanmontana1398@gmail.com',
      phone: '3043777072',
      message: 'Mensaje para primer registro de prueba.'
    });
    await newClient.save();
  } catch(e) {
    throw new Error(e.message)
  }
} 


module.exports = {
  createClient
}