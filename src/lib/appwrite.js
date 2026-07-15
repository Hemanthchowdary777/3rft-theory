import {
  Client,
  Account,
  Storage,
  TablesDB,
} from "appwrite";

const client = new Client();

client
  .setEndpoint("https://sgp.cloud.appwrite.io/v1")
  .setProject("6a4bce9b00114eab0e1a");

export const account = new Account(client);

export const tablesDB = new TablesDB(client);

export const storage = new Storage(client);

export default client;