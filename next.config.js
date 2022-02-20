module.exports = {
    reactStrictMode: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/signin',
                permanent: true,
            },
        ]
    },
}
