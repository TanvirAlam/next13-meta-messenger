'use client'

import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'
import { Message } from '../../typings';

type Props = {
    message: Message;
}

export default function MessageComponent({message}: Props) {
  const { data: session } = useSession()
  const isUser = session?.user?.email === message.email

  return (
    <div className={`flex w-fit ${isUser ? 'ml-auto' : ''}`}>
      <div className={`flex-shrink-0 ${isUser ? 'order-2' : ''}`}>
        <Image src={session?.user?.image!} className="rounded-full mx-2" height={10} width={50} alt="Profile Pic" />
      </div>
      <div>
        <div>
          <p className={`text-[0.65rem] px-[2px] pb-[2px] ${isUser ? 'text-blue-400 text-right' : 'text-red-400 text-left'}`}>{message.username}</p>
        </div>
        <div className="flex items-end">
          <div className={`px-3 py-2 rounded-lg w-fit text-white ${isUser ? 'bg-blue-400 ml-auto order-2' : 'bg-red-400'}`}>
            <p>{message.message}</p>
          </div>
            <p className={`text-[0.65rem] italic px-2 test-gray-300 ${isUser ? 'test-right' : ''}`}>{new Date(message.created_at).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  )
}