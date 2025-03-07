import { notFound } from "next/navigation";

import { PostCards } from "@/app/(public)/(blog)/blog/_components/post-cards";
import {
	getCategoryPostsCount,
	getPostsByCategoryId,
} from "@/app/(public)/(blog)/blog/categories/[id]/queries";
import { getCategories } from "@/app/queries";
import { Pagination } from "@/components/pagination";

type Props = { params: Promise<{ id: string }>; searchParams: Promise<{ page?: string }> };

export default async function Page(props: Props) {
	const categoryId = +(await props.params).id;

	const limit = 8;
	const page = Number((await props.searchParams).page) - 1 || 0;

	const [categoryPostsCount, categoryPostsData, categoriesData] =
		await Promise.all([
			getCategoryPostsCount(categoryId),
			getPostsByCategoryId(page, limit, categoryId),
			getCategories(),
		]);

	if (!categoriesData) notFound();

	const pagesCount = Math.ceil((categoryPostsCount || 0) / limit);

	return (
		<main>
			<h1 className="text-2xl font-bold py-5">
				{categoriesData.find((category) => category.id === categoryId)?.name}{" "}
				Posts
			</h1>
			<PostCards data={categoryPostsData} />
			<Pagination
				page={page}
				pagesCount={pagesCount}
				urlPrefix={`/blog/categories/${(await props.params).id}?`}
			/>
		</main>
	);
}
