import { ZenStackClient } from "@zenstackhq/orm";
import { PostgresDialect } from "kysely";
import { Pool } from "pg";
import { schema } from "../generated/schema";

export function createClient(connectionString: string) {
  const pool = new Pool({
    connectionString,
    connectionTimeoutMillis: 60000,
    max: 5,
  });
  return new ZenStackClient(schema, {
    dialect: new PostgresDialect({ pool }),
  });
}

export type Client = ReturnType<typeof createClient>;
