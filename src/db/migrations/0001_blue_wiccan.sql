CREATE TABLE "nav_links" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "nav_links_name_unique" UNIQUE("name")
);
