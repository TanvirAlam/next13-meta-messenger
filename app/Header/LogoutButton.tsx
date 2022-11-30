"use client";

import { signOut } from "next-auth/react"

type Props = {
    buttonText: string;
}

export default function LogoutButton({buttonText}: Props) {
    return (
        <button onClick={() => signOut()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {buttonText}
        </button>
    )
}