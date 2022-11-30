import React from 'react'
import { Message } from '../typings';
import MessageInput from './Message/MessageInput'
import MessageList from './Message/MessageList'
import Providers from './providers';
import { unstable_getServerSession } from 'next-auth';

async function HomePage() {
  const data = await fetch(`${process.env.VERCEL_URL || process.env.LOCAL_URL}/api/getMessages`).then((res) => res.json());
  const messages: Message[] = data.messages;
  const session = await unstable_getServerSession();
  
  return (
    <Providers session={session}>
      <MessageList initialMessages={messages} />
      <MessageInput session={session}/>
    </Providers>
  )
}

export default HomePage