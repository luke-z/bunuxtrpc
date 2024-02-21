import { NodePgDatabase, drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";

import * as schema from "~/schema";

let _client: pg.Client;
let _db: NodePgDatabase<typeof schema>;

export const useDrizzle = () => {
  if (!_client) {
    _client = new pg.Client({
      host: "localhost",
      port: 9432,
      user: "postgres",
      password: "test123",
      database: "drizzle",
    });
  }

  const connect = async () => {
    await _client.connect();
    _db = drizzle(_client, { schema });
  };

  return {
    connect,
    db: _db,
  };
};
