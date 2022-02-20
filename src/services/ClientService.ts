import { Client } from "../models/Client";
import { Service } from "typedi";
import ClientRepository from "../repositories/ClientRepository";

@Service()
class ClientService {
  constructor(private readonly clientRepository: ClientRepository) { }
  
  async getAllClients(): Promise<Client[]> {
    const result = await this.clientRepository.getAll();
    return result;
  }

  async addClient(clientData: Client): Promise<any> {
    const result = await this.clientRepository.addClient(clientData);
    return result;
  }

}

export default ClientService;