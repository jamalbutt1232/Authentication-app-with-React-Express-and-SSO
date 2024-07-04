// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";

// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID as string,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, account, profile, isNewUser }) {
//       console.log("JWT Callback:", { token, account, profile, isNewUser });
//       if (account) {
//         token.accessToken = account.access_token;
//       }
//       return token;
//     },
//     async session({ session, token, user }) {
//       console.log("Session Callback:", { session, token, user });
//       session.accessToken = token.accessToken as string;
//       return session;
//     },
//   },
// });
