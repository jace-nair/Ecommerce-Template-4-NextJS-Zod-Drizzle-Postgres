import Link from "next/link";

import { AuthUserAvatar } from "@/app/_components/auth-user-avatar";
import { getNavLinks } from "@/app/queries";
import { Button } from "@/components/ui/button";

export async function Navbar() {
	const navLinksData = (await getNavLinks()) || [];

	return (
		<nav className="flex gap-5 py-5 justify-between items-center">
			<div>
				{navLinksData.map((navLink) => (
					<Button variant="ghost" asChild key={navLink.id}>
						<Link href={navLink.href}>{navLink.name}</Link>
					</Button>
				))}
			</div>

			<AuthUserAvatar />
		</nav>
	);
}
