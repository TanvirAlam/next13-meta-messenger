import React from 'react'
import MessageInput from './Message/MessageInput'
import MessageList from './Message/MessageList'

function HomePage() {
  return (
    <div>
      <MessageList />
      <MessageInput />
    </div>
  )
}

export default HomePage