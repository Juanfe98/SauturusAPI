import "reflect-metadata";

import express from "express";
import Container from "typedi";
import ClientController from "./controllers/ClientController";
import DataBaseConnection from "./dataBaseConnection";

const main = async () => {
  const app = express();

  const _clientController = Container.get(ClientController);
  //   const mongoUri = "mongodb+srv://juan:*****@cluster0.fwgds.mongodb.net/sauturus?authSource=admin&replicaSet=atlas-f9dwt5-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true";
  const mongoUri =
    "mongodb+srv://juan:3VayQ5cSDIv3KrVg@cluster0.fwgds.mongodb.net/sauturus?retryWrites=true&w=majority";

  const _dataBaseConnector = new DataBaseConnection(mongoUri);
  _dataBaseConnector.connectSuccesfully();

  app.get("/clients", (req, res) => _clientController.getAllClients(req, res));
  app.get("/clients/addClient", (req, res) => _clientController.addClient(req, res));

  const port = process.env.PORT || 5000;
  app.listen(port, () => {
    console.log("Server started on port %s", port);
  });

};

main().catch((err) => {
  console.error(err);
});
