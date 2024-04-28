import { sql } from "drizzle-orm";
import { text, sqliteTable, blob, integer } from "drizzle-orm/sqlite-core";

export const users = sqliteTable("users", {
    userId: text("userId").primaryKey(),
    profile: blob("profile"),
    name: text("name").notNull(),
    email: text("email").unique().notNull(),
    password: text("password").notNull(),
    superUser: integer("superUser", { mode: "boolean" }).notNull().default(sql`false`),
    createdAt: integer("createdAt", { mode: "timestamp" }).notNull().default(sql`CURRENT_TIMESTAMP`),
});
