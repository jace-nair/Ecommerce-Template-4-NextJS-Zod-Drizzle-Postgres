import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact",
	description: "Contact Me",
};

export default async function Layout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		
			<main className="container max-w-7xl pb-5">
					{children}
			</main>
	);
}
