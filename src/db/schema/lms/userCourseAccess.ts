import { pgTable, primaryKey, serial } from "drizzle-orm/pg-core"
import { createdAt, updatedAt } from "../utils/schemaHelpers"
import { relations } from "drizzle-orm"
import { user } from "@/db/schema"
import { CourseTable } from "./course"

export const UserCourseAccessTable = pgTable(
  "user_course_access",
  {
    userId: serial()
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    courseId: serial()
      .notNull()
      .references(() => CourseTable.id, { onDelete: "cascade" }),
    createdAt,
    updatedAt,
  },
  t => [primaryKey({ columns: [t.userId, t.courseId] })]
)

export const UserCourseAccessRelationships = relations(
  UserCourseAccessTable,
  ({ one }) => ({
    user: one(user, {
      fields: [UserCourseAccessTable.userId],
      references: [user.id],
    }),
    course: one(CourseTable, {
      fields: [UserCourseAccessTable.courseId],
      references: [CourseTable.id],
    }),
  })
)