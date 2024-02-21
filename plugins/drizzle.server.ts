import { drizzle } from "drizzle-orm/node-postgres";
import { Client } from "pg";

export default defineNuxtPlugin(async (nuxtApp) => {
  const client = new Client({
    host: "localhost",
    port: 9432,
    user: "postgres",
    password: "test123",
    database: "drizzle",
  });
  await client.connect();
  const db = drizzle(client);

  nuxtApp.provide("db", db);
});
