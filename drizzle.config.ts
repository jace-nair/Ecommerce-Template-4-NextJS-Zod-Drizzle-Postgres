import { defineConfig } from "drizzle-kit";

import env from "@/lib/env";

export default defineConfig({
	schema: "./src/db/schema/index.ts",
	out: "./src/db/migrations",
	dialect: "postgresql",
	dbCredentials: {
		url: env.DATABASE_URL,
		ssl: false,
	},
	verbose: true,
	strict: true,
});
