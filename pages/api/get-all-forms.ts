import { NextApiRequest, NextApiResponse } from 'next'

import connectToDb from '@/helpers/connect-to-db'
import { getAllForms } from '@/helpers/forms/get-all-forms'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let creatorId: string = req.body.creatorId

    if (req.method !== 'GET') {
        res.status(405).json({ success: false, msg: 'Method not allowed' })
        return
    }

    if (creatorId === null || creatorId.length <= 4) {
        res.status(404).json({ success: false, msg: 'Invalid creatorId' })
        return
    }

    try {
        const { db } = await connectToDb()
        let collection = db.collection('forms')

        let allFormsData = await getAllForms(creatorId, collection)

        if (allFormsData.success) {
            res.status(200).json(allFormsData)
        } else {
            res.status(404).json(allFormsData)
        }
    } catch (error) {
        res.status(400).json({ success: false, msg: 'Api error' })
    }
}
