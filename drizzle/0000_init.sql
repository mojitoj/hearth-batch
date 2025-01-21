CREATE TABLE "jobs" (
	"id" varchar PRIMARY KEY NOT NULL,
	"status" varchar,
	"attempts" integer DEFAULT 0,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"fhir_base" varchar NOT NULL,
	"resource_id" varchar,
	"payload" jsonb
);
--> statement-breakpoint
CREATE INDEX "createdAtIndex" ON "jobs" USING btree ("createdAt");