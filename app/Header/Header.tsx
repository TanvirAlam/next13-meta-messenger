
import Image from 'next/image'
import LogoutButton from './LogoutButton';

type Props = {}

export default function Header({}: Props) {
    const session = true;

    if (session) {
        return (
            <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
                <div className="flex space-x-2">
                    <Image 
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png"
                        alt="Profile Picture"
                        width={50}
                        height={10}
                        className="rounded-full mx-2 object-contain"
                    />
                    <div>
                        <p className="text-blue-400">Logged in as:</p>
                        <p className="font-bold text-lg">Tanvir Alam</p>
                    </div>
                </div>
                <LogoutButton buttonText="Sign Out" />
            </header>
        )
    }
  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
        <div className="flex flex-col items-center space-y-5">
            <div className="flex space-x-2 items-center">
                <Image 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/800px-User_icon_2.svg.png" 
                    height={10} 
                    width={50} 
                    alt="logo" 
                />
                <p className="text-blue-500">Welcome to mete messanger</p>
            </div>
            {/* <LogoutButton buttonText="Sign In" handleOnClick={handleSignIn}/> */}
        </div>
    </header>
  )
}