import { Collection } from 'mongodb'

import { ApiResponse } from '@/types/api-response'
import { CreateFormType, Form } from '@/types/form'

export async function createForm(
    form: CreateFormType,
    collection: Collection
): Promise<ApiResponse> {
    let formToInsert: Omit<Form, '_id'> = {
        ...form,
        responses: [],
        createdAt: new Date(),
        updatedAt: new Date(),
    }

    let result = await collection.insertOne(formToInsert)

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
