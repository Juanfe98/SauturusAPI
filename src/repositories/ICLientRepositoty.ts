import { Client } from "../models/Client";
import IGenericRepository from "./IGenericRepository";

export default interface IClientRepository extends IGenericRepository<Client> {
  readonly clients: Array<Client>;  
}
