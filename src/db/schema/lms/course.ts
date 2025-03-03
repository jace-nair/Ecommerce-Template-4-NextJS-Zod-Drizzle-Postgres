import { relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { createdAt, id, updatedAt } from "../utils/schemaHelpers";
import { CourseProductTable } from "@/db/schema";
import { UserCourseAccessTable } from "@/db/schema";
import { CourseSectionTable } from "@/db/schema";

// Schema Table
export const CourseTable = pgTable("courses", {
  id,
  name: text().notNull(),
  description: text().notNull(),
  createdAt,
  updatedAt,
})

// Schema Relations
export const CourseRelationships = relations(CourseTable, ({ many }) => ({
  courseProducts: many(CourseProductTable),
  userCourseAccesses: many(UserCourseAccessTable),
  courseSections: many(CourseSectionTable),
}))