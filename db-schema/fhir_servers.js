const {
  pgTable,
  varchar,
} = require("drizzle-orm/pg-core");

const fhir_servers = pgTable(
  "fhir_servers",
  {
    id: varchar().primaryKey(),
    base: varchar({ length: 64 }).notNull()
  }
);

module.exports = { fhir_servers };
