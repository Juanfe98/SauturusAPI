import { Client } from "../models/Client";
import { Service } from "typedi";
import ClientRepository from "../repositories/ClientRepository";
import SendMailer from './../lib/SendMailer';

@Service()
class ClientService {
  constructor(
    private readonly clientRepository: ClientRepository, 
    private readonly sendMailer: SendMailer) { 
    this.clientRepository = clientRepository;
    this.sendMailer = sendMailer;
  }
  
  async getAllClients(): Promise<Client[]> {
    const result = await this.clientRepository.getAll();
    return result;
  }

  async add(clientData: Client): Promise<any> {
    const result = await this.clientRepository.add(clientData);
    this.sendMailer.send('juanmontana1398@gmail.com','testing ts', 'this is a test');
    return result;
  }

}

export default ClientService;