"use client";

type Props = {
    buttonText: string;
}

export default function LogoutButton({buttonText}: Props) {

    const handleSignIn = () => {
        console.log('SignIn clicked')
    }

    const handleSignOut = () => {
        console.log('SignIn clicked')
    }

    return (
        <button onClick={() => handleSignIn()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {buttonText}
        </button>
    )
}