import { Client, Graphql } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://api.kbve.com/v1")
  .setProject("6436a6dc9a6b48db802f"); 

export const API = new Graphql(client);