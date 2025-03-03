import { pgTable, primaryKey, serial } from "drizzle-orm/pg-core";
import { CourseTable } from "@/db/schema";
import { ProductTable } from "@/db/schema";
import { createdAt, updatedAt } from "../utils/schemaHelpers";
import { relations } from "drizzle-orm";


// Schema Table
export const CourseProductTable = pgTable(
  "course_products",
  {
    courseId: serial()
      .notNull()
      .references(() => CourseTable.id, { onDelete: "restrict" }),
    productId: serial()
      .notNull()
      .references(() => ProductTable.id, { onDelete: "cascade" }),
    createdAt,
    updatedAt,
  },
  t => [primaryKey({ columns: [t.courseId, t.productId] })]
)

// Schema Relations
export const CourseProductRelationships = relations(
  CourseProductTable,
  ({ one }) => ({
    course: one(CourseTable, {
      fields: [CourseProductTable.courseId],
      references: [CourseTable.id],
    }),
    product: one(ProductTable, {
      fields: [CourseProductTable.productId],
      references: [ProductTable.id],
    }),
  })
)