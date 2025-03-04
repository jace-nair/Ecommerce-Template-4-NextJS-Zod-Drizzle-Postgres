import Link from "next/link";
import { notFound } from "next/navigation";

import { Button } from "@/components/ui/button";
import { auth } from "@/lib/auth";
import { Badge } from "@/components/ui/badge";

export default async function AdminLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const session = await auth();
	if (!session) notFound();

	return (
		<div className="py-5">
			<div className="flex items-center justify-between ">
				<div className="flex py-5 gap-5">
					<Button asChild variant="ghost">
						<Link href="/admin">Profile</Link>
					</Button>
					<Button asChild variant="ghost">
						<Link href="/admin/shop">Shop</Link>
					</Button>
					<Button asChild variant="ghost">
						<Link href="/admin/lms">Courses</Link>
					</Button>
					<Button asChild variant="ghost">
						<Link href="/admin/posts">Posts</Link>
					</Button>
				</div>
				<Badge className="font-extrabold">Admin Page</Badge>
			</div>
			{children}
		</div>
	);
}
