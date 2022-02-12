import { Collection } from 'mongodb'

import { Form } from '@/types/form'
import { ApiResponse } from '@/types/api-response'

export async function getAllForms(
    creatorTag: Form['creatorTag'],
    collection: Collection
): Promise<ApiResponse> {
    let forms = await collection.find({ creatorTag: creatorTag }).toArray()
    let respones = { success: true, msg: '', data: forms }

    if (forms.length === 0) {
        return { ...respones, msg: 'No forms found' }
    }

    return { ...respones, msg: 'Forms found' }
}
