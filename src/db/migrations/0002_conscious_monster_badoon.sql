ALTER TABLE "nav_links" ADD COLUMN "href" varchar(255) NOT NULL;--> statement-breakpoint
ALTER TABLE "nav_links" ADD CONSTRAINT "nav_links_href_unique" UNIQUE("href");