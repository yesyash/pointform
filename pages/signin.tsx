import Head from 'next/head'
import Image from 'next/image'

import { signIn } from 'next-auth/react'

const Signin = () => {
    function handleSignin() {
        signIn('google', {
            callbackUrl:
                process.env.APP_ENV === 'prod'
                    ? 'https://pointform.vercel.app/dashboard'
                    : 'http://localhost:3000/dashboard',
        })
    }

    return (
        <>
            <Head>
                <title>Sign in - Pointform</title>
            </Head>

            <main>
                <div className="flex flex-col justify-center w-screen h-[80vh] max-w-xs px-5 py-8 mx-auto text-center align-center">
                    <div className="mb-11">
                        <h1 className="mb-4 text-2xl font-semibold">
                            Pointform
                        </h1>
                        <p className="text-lg">
                            We are glad you are here. <br /> Let{"'"}s get you
                            signed in!
                        </p>
                    </div>

                    <button
                        className="flex items-center w-full px-4 py-2 border rounded-md border-stone-300"
                        type="button"
                        onClick={handleSignin}
                    >
                        <Image
                            width={20}
                            height={20}
                            src="/google-logo.png"
                            alt="Google icon"
                        />
                        <span className="flex-1 text-center ">
                            Sign in with Google
                        </span>
                    </button>
                </div>
            </main>
        </>
    )
}

export default Signin
