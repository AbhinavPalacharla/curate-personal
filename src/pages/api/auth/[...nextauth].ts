import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "@/utils";
import type { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
      authorization:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
  ],
  session: {
    strategy: "database",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    session: async ({ session, user }) => {
      session.user = {
        id: user.id,
        name: user.name as string,
        username: user.username as string,
      };

      return session;
    },
    signIn: async ({ user, account, profile }) => {
      // if (user) {
      //   console.log("user", user);
      //   if (!user.username) {
      //     return "/register";
      //   }
      //   return "/";
      // }

      return true;
    },
  },
  pages: {
    signIn: "/signin",
    newUser: "/register",
  },
};

export default NextAuth(authOptions);
