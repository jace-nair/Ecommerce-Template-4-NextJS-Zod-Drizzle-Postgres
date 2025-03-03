import type { Metadata } from "next";

import { PostsNavbar } from "@/app/_components/posts-navbar";

export const metadata: Metadata = {
	title: "My Blog",
	description: "All good stuff",
};

export default async function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		
			<main className="container max-w-7xl pb-5">
					<PostsNavbar />
					{children}
			</main>
	);
}