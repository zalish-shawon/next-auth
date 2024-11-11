import CredentialsProvider from "next-auth/providers/credentials";

const { default: NextAuth } = require("next-auth");

const handler = NextAuth({
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            credentials: {
                email: {
                    label: "Email address",
                    type: "email",
                    required: true,
                    placeholder: "Enter your email",
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    required: true,
                    placeholder: 'Enter your password',
                },
            },

            async authorize(credentials, req) {
                if (!credentials) {
                    return null;
                }
                return true;

            }
        })
    ]
});


export {handler as GET, handler as POST};