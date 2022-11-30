import {getProviders, signIn } from 'next-auth/react'
import Image from 'next/image'
import SignInComponent from './SignInComponent'

type Props = {}

export default async function SignInPage({}: Props) {
    const providers = await getProviders()
    return (
        <div>
            <div className="grid justify-center pt-10 pb-10">
                <Image 
                    className="rounded-full mx-2 object-cover"
                    width={400}
                    height={400}
                    src="https://www.maxpixel.net/static/photo/1x/Logo-Like-Facebook-Fb-Socialmedia-Follow-Button-7118901.png"
                    alt="profile pic"
                />
            </div>
            <SignInComponent providers={providers} />
        </div>
    )
}