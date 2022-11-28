'use client'

import { FormEvent, useState } from "react"

type Props = {}

export default function MessageInput({}: Props) {
    const [input, setInput] = useState("")

    const addMessage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!input) return;

        const messageToSend = input
        
        setInput("")
    }

    return (
        <form onSubmit={addMessage} className="fixed bottom-0 flex px-10 py-5 w-full space-x-2 border-t broder-gray-100">
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 rounded border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed" placeholder="Enter message" />
            <button disabled={!input} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed" type="submit">Send</button>
        </form>
    )
}