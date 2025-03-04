import Link from "next/link";

import { Search } from "@/app/(public)/(blog)/blog/search/_components/search";
//import { AuthUserAvatar } from "@/app/_components/auth-user-avatar";
import { getCategories } from "@/app/queries";
import { Button } from "@/components/ui/button";

export async function PostsNavbar() {
	const categoriesData = (await getCategories()) || [];

	return (
		<nav className="flex gap-5 py-5 justify-between items-center">
			<div>
				{categoriesData.map((category) => (
					<Button variant="ghost" asChild key={category.id}>
						<Link href={`/blog/categories/${category.id}`}>{category.name}</Link>
					</Button>
				))}
			</div>

			<Search />
		</nav>
	);
}
