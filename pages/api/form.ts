import { NextApiRequest, NextApiResponse } from 'next'

import { CreateFormType, UpdateFormType } from '@/types/form'

import connectToDb from '@/utils/connect-to-db'
import { getOneForm } from '@/utils/form/get-one-form'
import { createForm } from '@/utils/form/create-form'
import { updateForm } from '@/utils/form/update-form'
import { deleteForm } from '@/utils/form/delete-form'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    let reqMethod = req.method
    const { db } = await connectToDb()
    let collection = db.collection('forms')

    switch (reqMethod) {
        case 'GET':
            let formId: string = req.body.id

            let formData = await getOneForm(formId, collection)

            if (formData.success) {
                res.status(200).json(formData)
            } else {
                res.status(404).json(formData)
            }
            break

        case 'POST':
            let form: CreateFormType = req.body.data

            let addResult = await createForm(form, collection)

            if (addResult.success) {
                res.status(200).json(addResult)
            } else {
                res.status(404).json(addResult)
            }
            break

        case 'PATCH':
            let idToUpdate: string = req.body.id
            let udpdatedFormData: UpdateFormType = req.body.data

            let updateResult = await updateForm(
                idToUpdate,
                udpdatedFormData,
                collection
            )

            if (updateResult.success) {
                res.status(200).json(updateResult)
            } else {
                res.status(404).json(updateResult)
            }
            break

        case 'DELETE':
            let idToDelete: string = req.body.id
            let deleteResult = await deleteForm(idToDelete, collection)

            if (deleteResult.success) {
                res.status(200).json(deleteResult)
            } else {
                res.status(404).json(deleteResult)
            }
            break
        default:
            res.status(405).json({ success: false, msg: 'Method not allowed' })
            break
    }
}
