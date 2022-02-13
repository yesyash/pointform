import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId:
                '2538380065-2mqfrjae9chkct9oj0ocnndkelvul7ed.apps.googleusercontent.com',
            clientSecret:
                '2538380065-2mqfrjae9chkct9oj0ocnndkelvul7ed.apps.googleusercontent.com',
        }),
    ],
})
