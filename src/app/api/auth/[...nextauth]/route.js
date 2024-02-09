
// OAuth
import NextAuth from "next-auth";
import {options} from "./options";
// Email and Password
import CredentialProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";


const handler = NextAuth(options);


// Email and Password
const prisma = new PrismaClient();


export const authOptions = {
    adapter: PrismaAdapter(prisma),
};


export { handler as GET, handler as POST };
