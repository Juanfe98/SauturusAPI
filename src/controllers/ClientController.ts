import { Request, Response } from "express";
import { Service } from "typedi";
import ClientService from "../services/ClientService";

@Service()
class ClientController {
  constructor(private readonly clientService: ClientService) { }
  async getAllClients(_req: Request, res: Response) {
    const result = await this.clientService.getAllClients();
    return res.json(result);
  }
}

export default ClientController;