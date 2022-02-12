import { NextApiRequest, NextApiResponse } from 'next'
import { connectToDb } from '@/utils/mongo'
import { Form } from '@/types/form'
import { Collection, ObjectId } from 'mongodb'
import { ApiResponse } from '@/types/api-response'
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
            let result = await collection.findOne(
                new ObjectId('6206b25923b51415f4909fe7')
            )
            console.log(result === null)
            res.send(result)

            break

        case 'POST':
            let form: Omit<Form, '_id'> = {
                name: 'testform',
                category: 'test',
                questions: [
                    {
                        question: 'hello',
                        type: 'mcq',
                        options: [{ _id: '12', value: '134' }],
                        required: false,
                        order: 1,
                    },
                ],
                responses: [
                    {
                        _id: '123',
                        questionId: '123',
                        answerId: '124',
                        startedOn: new Date(),
                        finishedAt: new Date(),
                    },
                ],
                createdAt: new Date(),
                EditedAt: new Date(),
                creatorTag: 'testDev',
                isPublic: false,
            }

            let addResult = await createForm(form, collection)

            if (addResult.success) {
                res.status(200).json(addResult)
                break
            } else {
                res.status(404).json(addResult)
                break
            }

        case 'DELETE':
            // let deleteResult = await deleteForm(
            //     '6206ae6123b51415f4909fe6',
            //     collection
            // )

            let deleteResult = await deleteForm(
                '6206b25923b51415f4909fe8',
                collection
            )

            if (deleteResult.success) {
                res.status(200).json(deleteResult)
                break
            } else {
                res.status(404).json(deleteResult)
                break
            }
        default:
            break
    }
}

async function createForm(
    form: Omit<Form, '_id'>,
    collection: Collection
): Promise<ApiResponse> {
    let result = await collection.insertOne(form)

    if (result.acknowledged) {
        return {
            success: true,
            msg: 'Form created successfully',
            data: { _id: result.insertedId },
        }
    } else {
        return {
            success: false,
            msg: 'Unable to create form please try again',
        }
    }
}
