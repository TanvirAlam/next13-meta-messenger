'use client'

import React from 'react'
import useSWR from 'swr'
import { Message } from '../../typings'
import fetcher from '../../utils/fetchMessages'

type Props = {}

export default function MessageList({}: Props) {
  const { data: messages, error, mutate } = useSWR<Message[]>("/api/getMessages", fetcher)

  return (
    <div>
      {
        messages?.map(message => {
          return (
            <div key={message.id}>
              <p>{message.message}</p>
            </div>
          )
        })
      }
    </div>
  )
}