import { relations } from "drizzle-orm"
import { pgTable, text } from "drizzle-orm/pg-core"
import { createdAt, id, updatedAt } from "../utils/schemaHelpers"
import { CourseProductTable } from "./courseProduct"
import { UserCourseAccessTable } from "./../lms/userCourseAccess"
import { CourseSectionTable } from "./../lms/courseSection"

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