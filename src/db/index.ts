import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';

const client = createClient({
    url: Bun.env.DATABASE_URL!,
});

const db = drizzle(client);
