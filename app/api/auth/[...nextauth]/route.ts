export { GET, POST } from '@/lib/auth'
// import NextAuth from 'next-auth'
// import CredentialsProvider from 'next-auth/providers/credentials'
// import dbConnect from '@/lib/dbConnect'
// import User from '@/lib/models/UserModel'
// import bcrypt from 'bcryptjs'

// const handler = NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {
//         email: { label: 'Email', type: 'text', placeholder: 'email' },
//         password: { label: 'Password', type: 'password' },
//       },

//       async authorize(credentials) {
//         await dbConnect()

//         try {
//           const user = await User.findOne({
//             email: credentials?.email,
//           })

//           if (user) {
//             if (credentials?.password) {
//               const isPasswordCorrect = await bcrypt.compare(
//                 credentials.password,
//                 user.password
//               )
//               if (isPasswordCorrect) {
//                 return user
//               } else {
//                 throw new Error('Credenciales incorrectas')
//               }
//             } else {
//               throw new Error('La contraseña no fue proporcionada')
//             }
//           } else {
//             throw new Error('Usuario no encontrado')
//           }
//         } catch (err) {
//           console.log(err)
//           throw new Error('Error en la autenticación')
//         }
//       },
//     }),
//   ],
//   pages: {
//     error: '/signin',
//   },
// callbacks: {
//   async jwt({ user, trigger, session, token }: any) {
//     if (user) {
//       token.user = {
//         _id: user._id,
//         email: user.email,
//         name: user.name,
//         isAdmin: user.isAdmin,
//       }
//     }
//     if (trigger === 'update' && session) {
//       token.user = {
//         ...token.user,
//         email: session.user.email,
//         name: session.user.name,
//       }
//     }
//     return token
//   },
//   session: async ({ session, token }: any) => {
//     if (token) {
//       session.user = token.user
//     }
//     return session
//   },
// },
// })

// export { handler as GET, handler as POST }
