CREATE TABLE "links" (
	"id" text PRIMARY KEY NOT NULL,
	"original_link" text NOT NULL,
	"short_link" text NOT NULL,
	"access_count" integer DEFAULT 0 NOT NULL,
	"remote_key" text NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	CONSTRAINT "links_short_link_unique" UNIQUE("short_link"),
	CONSTRAINT "links_remote_key_unique" UNIQUE("remote_key")
);
