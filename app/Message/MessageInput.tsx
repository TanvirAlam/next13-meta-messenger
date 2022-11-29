'use client'

import { FormEvent, useState } from "react"
import useSWR from "swr"
import { v4 as uuid } from "uuid"
import { Message } from "../../typings"
import fetcher from "../../utils/fetchMessages"
type Props = {}

export default function MessageInput({}: Props) {
    const [input, setInput] = useState("")
    const { data: messages, error, mutate } = useSWR("/api/getMessages", fetcher)

    console.log(messages)

    const addMessage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!input) return;

        const messageToSend = input
        
        setInput("")

        const id = uuid()

        const message: Message = {
            id,
            message: messageToSend,
            create_at: Date.now(),
            username: "Tanvir",
            profilePic: "https://external-preview.redd.it/3fl8LF38_7y4MTd5a3wccJhN_FRFB8PDLA1SGDBZrwk.jpg?auto=webp&s=22460454eddd71b0fe7c7ee03de01216640b08f0",
            email: "tanvir@gmail.com"
        }

        const uploadMessageUpstash = async () => {
            const data = await fetch('/api/addMessage', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({message})
            }).then(res => res.json())

            return [data.message, ...messages!]
        }
        
        await mutate(uploadMessageUpstash, {
            optimisticData: [message, ...messages!],
            rollbackOnError: true
        })
    }

    return (
        <form onSubmit={addMessage} className="fixed bottom-0 flex px-10 py-5 w-full space-x-2 border-t broder-gray-100">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed" placeholder="Enter message" />
            <button disabled={!input} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed" type="submit">Send</button>
        </form>
    )
}