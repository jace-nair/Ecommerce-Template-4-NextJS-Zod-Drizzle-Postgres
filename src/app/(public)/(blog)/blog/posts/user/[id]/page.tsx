import { notFound } from "next/navigation";

import { PostCards } from "@/app/(public)/(blog)/blog/_components/post-cards";
import { getUser, getUserPosts, getUserPostsCount } from "@/app/queries";
import { Pagination } from "@/components/pagination";

type Props = { params: Promise<{ id: string }>; searchParams: Promise<{ page?: string }> };
export default async function Page(props: Props) {
	const userId = +(await props.params).id;
	const limit = 8;
	const page = Number((await props.searchParams).page) - 1 || 0;

	const [userPostsCount, userPostsData, userData] = await Promise.all([
		getUserPostsCount(userId),
		getUserPosts({ userId, limit, page }),
		getUser(userId),
	]);

	if (!userData) notFound();

	const pagesCount = Math.ceil((userPostsCount || 0) / limit);

	return (
		<main>
			<h1 className="text-2xl font-bold py-5">{userData.fullName} Posts</h1>
			<PostCards data={userPostsData} />
			<Pagination
				page={page}
				pagesCount={pagesCount}
				urlPrefix={`/blog/posts/user/${(await props.params).id}?`}
			/>
		</main>
	);
}
