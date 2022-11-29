'use client'

import React from 'react'
import useSWR from 'swr'
import { Message } from '../../typings'
import fetcher from '../../utils/fetchMessages'
import MessageComponent from './MessageComponent'

type Props = {}

export default function MessageList({}: Props) {
  const { data: messages, error, mutate } = useSWR<Message[]>("/api/getMessages", fetcher)

  return (
    <div className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl:max-w-4xl mx-auto">
      {
        messages?.map(message => {
          return (
            <MessageComponent key={message.id} message={message} />
          )
        })
      }
    </div>
  )
}