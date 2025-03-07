import Link from "next/link";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { UserModelType } from "@/db/schema/user/user";

type Props = {
	data?: Pick<UserModelType, "id" | "fullName">;
	href?: string;
};
export function UserAvatar({ data, ...props }: Props) {
	const { href = `/blog/posts/user/${data?.id}` } = props;

	return (
		<Link href={href}>
			<div className="flex items-center gap-2">
				<Avatar>
					<AvatarFallback>{data?.fullName[0]}</AvatarFallback>
				</Avatar>
				<p>{data?.fullName}</p>
			</div>
		</Link>
	);
}
