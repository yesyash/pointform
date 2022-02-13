import { useSession, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
export default function Dashboard() {
    const router = useRouter()
    const { data: session, status } = useSession()

    async function signoutuser() {
        const data = await signOut({ redirect: false, callbackUrl: '/' })
        router.push(data.url)
    }

    return (
        <>
            <h2>dashboard</h2>

            {status === 'authenticated' && (
                <>
                    <p>signed in as: {session.user.email}</p>
                    <button
                        className="block px-5 py-2 m-4"
                        onClick={() => signoutuser()}
                    >
                        Signout
                    </button>
                </>
            )}
        </>
    )
}
