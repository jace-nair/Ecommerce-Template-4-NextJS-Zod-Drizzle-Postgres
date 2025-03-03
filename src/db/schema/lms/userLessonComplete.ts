import { pgTable, primaryKey, serial } from "drizzle-orm/pg-core"
import { createdAt, updatedAt } from "../utils/schemaHelpers"
import { relations } from "drizzle-orm"
import { user } from "@/db/schema"
import { LessonTable } from "./lesson"

export const UserLessonCompleteTable = pgTable(
  "user_lesson_complete",
  {
    userId: serial()
      .notNull()
      .references(() => user.id, { onDelete: "cascade" }),
    lessonId: serial()
      .notNull()
      .references(() => LessonTable.id, { onDelete: "cascade" }),
    createdAt,
    updatedAt,
  },
  t => [primaryKey({ columns: [t.userId, t.lessonId] })]
)

export const UserLessonCompleteRelationships = relations(
  UserLessonCompleteTable,
  ({ one }) => ({
    user: one(user, {
      fields: [UserLessonCompleteTable.userId],
      references: [user.id],
    }),
    lesson: one(LessonTable, {
      fields: [UserLessonCompleteTable.lessonId],
      references: [LessonTable.id],
    }),
  })
)