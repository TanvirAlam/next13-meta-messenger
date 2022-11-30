"use client"

import { SessionProvider } from 'next-auth/react'
import React from 'react'
import { unstable_getServerSession } from 'next-auth';

type Props = {
    session: Awaited<ReturnType<typeof unstable_getServerSession>>
    children: any
}

export default function Providers({session, children}: Props) {
  return (
    <SessionProvider session={session}>{children}</SessionProvider>
  )
}