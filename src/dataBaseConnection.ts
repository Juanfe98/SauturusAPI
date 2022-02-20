import mongoose from 'mongoose';

export default class DataBaseConnection {
    private mongoUri:string;
    constructor (mongoUri:string){
        this.mongoUri = mongoUri;
    }
    connectSuccesfully(){
        mongoose.connect(this.mongoUri,{       
        }).then( () => console.log('\n\n\n\t 🥳🥳🥳CONECTADO A LA BASE DE DATOS CON EXITO\n'));  
    }
}