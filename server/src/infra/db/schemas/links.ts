import { randomUUID } from "node:crypto";
import { pgTable, text, integer, timestamp } from "drizzle-orm/pg-core";

export const links = pgTable("links", {
    id: text("id").primaryKey().$defaultFn(() => randomUUID()),
    originalLink: text("original_link").notNull(),
    shortLink: text("short_link").notNull().unique(),
    accessCount: integer("access_count").notNull().default(0),
    remoteKey: text("remote_key").notNull().unique(),
    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow()
})