CREATE TABLE "fhir_servers" (
	"id" varchar PRIMARY KEY NOT NULL,
	"base" varchar(64) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "jobs" (
	"id" varchar PRIMARY KEY NOT NULL,
	"status" varchar,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"fhir_server" varchar,
	"resource_identifier" varchar,
	"payload" jsonb
);
--> statement-breakpoint
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_fhir_server_fhir_servers_id_fk" FOREIGN KEY ("fhir_server") REFERENCES "public"."fhir_servers"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "createdAtIndex" ON "jobs" USING btree ("createdAt");