import * as mongoose from 'mongoose';
import { Document, Model } from "mongoose";

export interface Client {
    _id?:string,
    name?:string;
    email?:string;
    phone?:string;
    message?:string;
    date?:Date; 
}

export type IClient = Client | Document;

// export interface IClient extends Document{
//     name?:string;
//     email?:string;
//     phone?:string;
//     message?:string;
//     date?:Date; 
// }

const Schema = mongoose.Schema;
const ClientSchema = new Schema({
name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
}, 
{ 
  timestamps: true,
  versionKey: false,
});
export default mongoose.model<IClient>('Client', ClientSchema);

