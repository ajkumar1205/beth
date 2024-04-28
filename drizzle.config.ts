import type { Config } from "drizzle-kit";

export default {
    schema: "./src/drizzle/schema.ts",
    driver: "better-sqlite",
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    }

} satisfies Config;
