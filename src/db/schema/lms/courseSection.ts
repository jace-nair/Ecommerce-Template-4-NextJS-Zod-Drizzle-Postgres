import { integer, pgEnum, pgTable, text, serial } from "drizzle-orm/pg-core"
import { createdAt, id, updatedAt } from "../utils/schemaHelpers"
import { CourseTable } from "@/db/schema"
import { relations } from "drizzle-orm"
import { LessonTable } from "@/db/schema"

export const courseSectionStatuses = ["public", "private"] as const
export type CourseSectionStatus = (typeof courseSectionStatuses)[number]
export const courseSectionStatusEnum = pgEnum(
  "course_section_status",
  courseSectionStatuses
)

export const CourseSectionTable = pgTable("course_sections", {
  id,
  name: text().notNull(),
  status: courseSectionStatusEnum().notNull().default("private"),
  order: integer().notNull(),
  courseId: serial()
    .notNull()
    .references(() => CourseTable.id, { onDelete: "cascade" }),
  createdAt,
  updatedAt,
})

export const CourseSectionRelationships = relations(
  CourseSectionTable,
  ({ many, one }) => ({
    course: one(CourseTable, {
      fields: [CourseSectionTable.courseId],
      references: [CourseTable.id],
    }),
    lessons: many(LessonTable),
  })
)