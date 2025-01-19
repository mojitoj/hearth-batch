CREATE TABLE "jobs" (
	"id" varchar PRIMARY KEY NOT NULL,
	"status" varchar,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"fhir_base" varchar NOT NULL,
	"resource_identifier" varchar,
	"payload" jsonb
);
--> statement-breakpoint
CREATE INDEX "createdAtIndex" ON "jobs" USING btree ("createdAt");