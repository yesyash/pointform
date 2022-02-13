import { Collection, ObjectId } from 'mongodb'

import { Form, UpdateFormType } from '@/types/form'
import { ApiResponse } from '@/types/api-response'

export async function updateForm(
    formId: Form['_id'],
    formData: UpdateFormType,
    collection: Collection
): Promise<ApiResponse> {
    try {
        let updateDoc = await collection.updateOne(
            { _id: new ObjectId(formId) },
            {
                $set: formData,
                $currentDate: {
                    updatedAt: true,
                },
            }
        )

        if (updateDoc.matchedCount === 0) {
            return { success: false, msg: 'Form not found' }
        }

        if (updateDoc.acknowledged && updateDoc.matchedCount === 1) {
            return { success: true, msg: 'Form updated successfully' }
        }
    } catch (error) {
        return { success: false, msg: 'Error updating form details' }
    }
}
