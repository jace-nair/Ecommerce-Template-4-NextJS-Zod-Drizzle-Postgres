import { InferSelectModel, relations } from "drizzle-orm";
import {
	integer,
	pgTable,
	pgEnum,
	timestamp,
	text,
	varchar,
} from "drizzle-orm/pg-core";

import { id, createdAt, updatedAt } from "../utils/schemaHelpers";

import { post } from "@/db/schema"
import { userCourseAccessTable } from "@/db/schema";

export const userRoles = ["user", "admin"] as const
export type UserRole = (typeof userRoles)[number]
export const userRoleEnum = pgEnum("user_role", userRoles)

import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Schema Table
export const user = pgTable("user", {
	id,
	fullName: varchar("full_name", { length: 255 }).notNull(),
	role: userRoleEnum().notNull().default("user"),
	age: integer("age").notNull(),
	password: varchar("password", { length: 255 }).notNull(),
	imageUrl: text("image"),
	email: varchar("email", { length: 255 }).notNull().unique(),
	emailVerified: timestamp("emailVerified", { mode: "date" }),
	createdAt,
	updatedAt,
});

// Schema Relations
export const userRelations = relations(user, ({ many }) => ({
	posts: many(post),
	userCourseAccesses: many(userCourseAccessTable),
}));

// Schema Type
const userBaseSchema = createInsertSchema(user, {
	fullName: (schema) => schema.min(1),
	password: (schema) => schema.min(1),
	age: z.coerce.number().min(18).max(99),
	email: (schema) => schema.email(),
}).pick({ fullName: true, password: true, age: true, email: true });

export const userSchema = z.union([
	z.object({
		mode: z.literal("signUp"),
		email: userBaseSchema.shape.email,
		password: userBaseSchema.shape.password,
		fullName: userBaseSchema.shape.fullName,
		age: userBaseSchema.shape.age,
	}),
	z.object({
		mode: z.literal("signIn"),
		email: userBaseSchema.shape.email,
		password: userBaseSchema.shape.password,
	}),
	z.object({
		mode: z.literal("update"),
		fullName: userBaseSchema.shape.fullName,
		age: userBaseSchema.shape.age,
		id: z.number().min(1),
	}),
]);

export type UserSchemaType = z.infer<typeof userSchema>;
export type UserModelType = InferSelectModel<typeof user>;