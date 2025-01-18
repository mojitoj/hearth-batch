const {
  pgTable,
  varchar,
  jsonb,
  timestamp,
  index
} = require("drizzle-orm/pg-core");
const { fhir_servers } = require("./fhir_servers");

const jobs = pgTable(
  "jobs",
  {
    id: varchar().primaryKey(),
    status: varchar(),
    createdAt: timestamp().notNull().defaultNow(),
    fhir_server: varchar().references(() => fhir_servers.id, {
      onDelete: "cascade"
    }),
    resource_identifier: varchar(),
    payload: jsonb()
  },
  (table) => [index("createdAtIndex").on(table.createdAt)]
);

module.exports = { jobs };
