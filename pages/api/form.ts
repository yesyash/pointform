import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDb } from '@/utils/mongo'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { db } = await connectToDb()
    let reqMethod = req.method
    let data = await db.collection('forms').find()

    switch (reqMethod) {
        case 'GET':
            if (data === null) {
                res.status(200).json({})
                break
            }

            res.status(200).json(data)
            break

        default:
            break
    }
}
