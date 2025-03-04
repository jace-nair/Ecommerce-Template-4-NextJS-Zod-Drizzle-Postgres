import { DB } from "@/db";
import { navLinks } from "@/db/schema";
//import { CategorySchemaType } from "@/db/schema/post/category";
import { NavLinksSchemaType } from "@/db/schema";

const links: NavLinksSchemaType[] = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Shop",
        href: "/shop"
    },
    {
        name: "Learn",
        href: "/learn",
    },
    {
        name: "Blog",
        href: "/blog",
    },
    {
        name: "Contact",
        href: "/contact",
    },
];

export async function seed(db: DB) {
    await db.insert(navLinks).values(links);
}
