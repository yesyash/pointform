import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'

export default function Home() {
    const router = useRouter()

    async function signoutuser() {
        const data = await signOut({ redirect: false, callbackUrl: '/' })
        router.push(data.url)
    }

    const { data: session, status } = useSession()
    if (status === 'authenticated') {
        return (
            <>
                <p>signed in as: {session.user.email}</p>
                <button
                    className="block px-5 py-2 m-4"
                    onClick={() => signoutuser()}
                >
                    Signout
                </button>
            </>
        )
    }
    return (
        <button
            className="block px-5 py-2 m-4"
            onClick={() =>
                signIn('google', {
                    callbackUrl: 'http://localhost:3000/dashboard',
                })
            }
        >
            signin
        </button>
    )
}
