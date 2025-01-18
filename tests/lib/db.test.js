const { db } = require("../../lib/db");
const { sql } = require("drizzle-orm");

it("database is connected", async () => {
  await db.execute(sql`select 1;`);
});
