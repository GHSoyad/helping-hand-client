import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      id: "helping-hand",
      name: "Credentials",
      type: "credentials",

      credentials: {
        email: { label: "email", type: "email", placeholder: "Your email..." },
        password: { label: "password", type: "password", placeholder: "Your password..." },
      },

      async authorize(credentials, req) {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
          method: "POST",
          body: JSON.stringify(credentials),
          headers: { "Content-Type": "application/json" },

        });
        const { content } = await res.json();

        // If no error and we have user data, return it
        if (res.status === 200 && content) {
          return { ...content };
        }
        // Return null if user data could not be retrieved
        return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }: { token: any; user: any }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      return {
        ...token,
        ...user,
      };
    },
    async session({ session, token }: { session: any; token: any }) {
      return {
        ...session,
        ...token,
      };
    },
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  pages: {
    signIn: '/login',
  }
};