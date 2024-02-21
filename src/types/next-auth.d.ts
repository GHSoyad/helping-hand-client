import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    "expires": string,
    "name": string,
    "email": string,
    "_id": string,
    "role": string,
    "token": string,
    "iat": number,
    "exp": number,
    "jti": string,
    user: {
    } & DefaultSession["user"]
  }
}