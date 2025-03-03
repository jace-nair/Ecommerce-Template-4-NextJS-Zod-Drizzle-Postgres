"use server";

import { redirect } from "next/navigation";

import { db } from "@/db";
import { user } from "@/db/schema";
import { UserSchemaType, userSchema } from "@/db/schema/user/user";
import { executeAction } from "@/db/utils/executeAction";

export async function signUp(data: UserSchemaType) {
	return executeAction({
		actionFn: async () => {
			const validatedData = userSchema.parse(data);
			if (validatedData.mode === "signUp") {
				await db.insert(user).values(validatedData);
				redirect("/sign-in");
			}
		},
		isProtected: false,

		clientSuccessMessage: "Signed up successfully",
		serverErrorMessage: "signUp",
	});
}
