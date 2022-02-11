import { MongoClient, Db } from 'mongodb'

interface Connection {
    client: MongoClient
    db: Db
}

interface MongoCache {
    conn: Connection
    promise: Promise<Connection>
}

const { DB_URL, DB_NAME } = process.env

if (!DB_URL) {
    throw new Error('Enter mongo bd url.')
}

if (!DB_NAME) {
    throw new Error('Enter db name.')
}

// Cache the mongo connection to avoid multiple requests.
let cached: MongoCache = global.mongo

if (!cached) {
    cached = global.mongo = { conn: null, promise: null }
}

export async function connectToDb() {
    if (cached.conn) {
        return cached.conn
    }

    if (!cached.promise) {
        cached.promise = MongoClient.connect(DB_URL).then((client) => {
            return { client, db: client.db(DB_NAME) }
        })
    }

    cached.conn = await cached.promise
    return cached.conn
}
