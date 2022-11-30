import React from 'react'
import { Message } from '../typings';
import MessageInput from './Message/MessageInput'
import MessageList from './Message/MessageList'

async function HomePage() {
  const data = await fetch(`${process.env.VERCEL_URL || process.env.LOCAL_URL}/api/getMessages`).then((res) => res.json());
  const messages: Message[] = data.messages;
  
  return (
    <div>
      <MessageList initialMessages={messages} />
      <MessageInput />
    </div>
  )
}

export default HomePage