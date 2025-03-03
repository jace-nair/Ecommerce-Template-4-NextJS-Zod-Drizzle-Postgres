"use server";

import { UserSchemaType, userSchema } from "@/db/schema/user/user";
import { executeAction } from "@/db/utils/executeAction";
import { signIn as authSignIn } from "@/lib/auth";

export async function signIn(data: UserSchemaType) {
	return executeAction({
		actionFn: async () => {
			const validatedData = userSchema.parse(data);
			await authSignIn("credentials", { ...validatedData, redirectTo: "/" });
		},
		isProtected: false,
		clientSuccessMessage: "Signed in successfully",
		serverErrorMessage: "signIn",
	});
}
