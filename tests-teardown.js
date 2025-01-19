require("dotenv").config({ path: ".env.test" });
process.env.NODE_ENV = "test";

const { db } = require("./lib/db");
const { sql } = require("drizzle-orm");

async function tearDown() {
  await db.execute(sql`truncate table jobs;`);
}

module.exports = tearDown;
