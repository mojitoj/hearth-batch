const {
  pgTable,
  varchar,
  jsonb,
  timestamp,
  index
} = require("drizzle-orm/pg-core");

const jobs = pgTable(
  "jobs",
  {
    id: varchar().primaryKey(),
    status: varchar(),
    createdAt: timestamp().notNull().defaultNow(),
    fhir_base: varchar().notNull(),
    resource_identifier: varchar(),
    payload: jsonb()
  },
  (table) => [index("createdAtIndex").on(table.createdAt)]
);

module.exports = { jobs };
