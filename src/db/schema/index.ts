export { user, userRelations } from "@/db/schema/user/user";
export { category, categoryRelations } from "@/db/schema/post/category";
export { post, postRelations } from "@/db/schema/post/post";
export { tag, tagRelations } from "@/db/schema/post/tag";
export { postTags, postTagsRelations } from "@/db/schema/post/postTags";
export { comment, commentRelations } from "@/db/schema/post/comment";
export * from "@/db/schema/lms/course"
export * from "@/db/schema/lms/courseProduct"
export * from "@/db/schema/lms/courseSection"
export * from "@/db/schema/lms/lesson"
export * from "@/db/schema/lms/product"
export * from "@/db/schema/lms/purchase"
export * from "@/db/schema/user/userLms"
export * from "@/db/schema/lms/userCourseAccess"
export * from "@/db/schema/lms/userLessonComplete"