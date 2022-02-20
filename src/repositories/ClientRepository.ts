import { Client } from "../models/Client";
import { Service } from "typedi";
import IClientRepository from "./ICLientRepositoty";
import ClientDB from "../models/Client";

@Service()
class ClientRepository implements IClientRepository {
  clients: Client[];

  async getAll(): Promise<Array<Client>> {
    try {
      const clients = await ClientDB.find();
      return <Array<Client>>clients;     
    } catch (error) {
      console.log("🚀 ~ file: ClientRepository.ts ~ getAll ", error)
    }
  }

  async addClient(clientData: Client): Promise<Client> {
    try {
      const newClient = new ClientDB(clientData);
      const savedClient = await newClient.save();
      return savedClient;
    }catch(error){
      console.log("🚀 ~ file: ClientRepository.ts ~ addClient ", error)
    }
  }

}

export default ClientRepository;
