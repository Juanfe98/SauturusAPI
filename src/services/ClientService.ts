import { Client } from "../models/Client";
import { Service } from "typedi";
import User from "../models/User";
import ClientRepository from "../repositories/ClientRepository";

@Service()
class ClientService {
  constructor(private readonly clientRepository: ClientRepository) { }
  async getAllClients(): Promise<Client[]> {
    const result = await this.clientRepository.getAll();
    return result;
  }
}

export default ClientService;