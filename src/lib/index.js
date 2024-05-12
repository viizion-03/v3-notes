// place files you want to import through the `$lib` alias in this folder.
import { Client, Databases } from "appwrite";

export const client = new Client();

client
  .setEndpoint("http://appwrite.waterwolf.tech:8080/v1")
  .setProject("6564bb02225f43064f1d");

export const databases = new Databases(client)