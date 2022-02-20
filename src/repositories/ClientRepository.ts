import { Client } from "../models/Client";
import { Service } from "typedi";
import User from "../models/User";
import IClientRepository from "./ICLientRepositoty";
import ClientDB from "../models/Client";

@Service()
class ClientRepository implements IClientRepository {
  clients: Client[];
  async getAll(): Promise<Array<Client>> {
    try {
      const clients = await ClientDB.find().select("-password").sort({date: -1});
      return <Array<Client>>clients;     
    } catch (error) {
      
    }
    return this.clients;
  }
}

export default ClientRepository;
