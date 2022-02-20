import mongoose from 'mongoose';

export default class DataBaseConnection {
    private mongoUri:string;
    constructor (mongoUri:string){
        this.mongoUri = mongoUri;
    }
    connectSuccesfully(){
        // const MONGO_URI = "mongodb+srv://cristiantorresf:Rnc4x4HPYIgP1EPy@cluster0.1ijuu.azure.mongodb.net/eatlify?retryWrites=true&w=majority";
        mongoose.connect(this.mongoUri,{       
        }).then( () => console.log('\n\n\n\t 🥳🥳🥳CONECTADO A LA BASE DE DATOS CON EXITO\n'));  
    }
}