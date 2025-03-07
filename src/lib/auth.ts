import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { getUserByEmailAndPassword } from "@/app/sign-in/queries";

export const { handlers, signIn, signOut, auth } = NextAuth({
	providers: [
		Credentials({
			credentials: {
				email: {},
				password: {},
			},
			authorize: async (credentials) => {
				const dbUser = await getUserByEmailAndPassword(credentials);
				if (!dbUser) {
					throw new Error("User not found / Wrong credentials");
				}

				return { ...dbUser, id: dbUser.id.toString() };
			},
		}),
	],
	callbacks: {
		jwt({ token, user }) {
			if (user) {
				token.id = user.id;
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				token.fullName = user.fullName;
			}
			return token;
		},
		session({ session, token }) {
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			session.user.id = token.id;
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			session.user.fullName = token.fullName;
			return session;
		},
	},
});
