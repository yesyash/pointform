import { Collection, ObjectId } from 'mongodb'

import { Form } from '@/types/form'
import { ApiResponse } from '@/types/api-response'

export async function getOneForm(
    formId: Form['_id'],
    collection: Collection
): Promise<ApiResponse> {
    try {
        let formData = await collection.findOne({ _id: new ObjectId(formId) })

        if (formData === null) {
            return { success: false, msg: 'No form found' }
        }

        return { success: true, msg: 'Form found', data: formData }
    } catch (error) {
        return { success: false, msg: 'Enter correct formId' }
    }
}
