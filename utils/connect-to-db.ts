import clientPromise from '@/lib/mongo'

const { DB_NAME } = process.env

export default async function connectToDb() {
    let connection = await clientPromise.then((client) => {
        return { client, db: client.db(DB_NAME) }
    })

    return connection
}
