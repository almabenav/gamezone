// 'use client'
// import { SessionProvider } from 'next-auth/react'
// import ClientProviders from './ClientProviders'
// import { auth } from '@/lib/auth'

// export default async function Providers({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const session = await auth()

//   return (
//     <>
//       <SessionProvider session={session}>
//         <ClientProviders>{children}</ClientProviders>
//       </SessionProvider>
//     </>
//   )
// }
import { SessionProvider } from 'next-auth/react'
import { auth } from '@/lib/auth'
import ClientProviders from './ClientProviders'

export default async function Providers({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  return (
    <SessionProvider session={session}>
      <ClientProviders>{children}</ClientProviders>
    </SessionProvider>
  )
}
