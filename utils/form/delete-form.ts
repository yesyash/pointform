import { Collection, ObjectId } from 'mongodb'

import { Form } from '@/types/form'
import { ApiResponse } from '@/types/api-response'

export async function deleteForm(
    formId: Form['_id'],
    collection: Collection
): Promise<ApiResponse> {
    try {
        let forms = await collection.deleteOne({ _id: new ObjectId(formId) })

        if (forms.deletedCount === 0) {
            return { success: false, msg: 'No form to delete' }
        }

        if (forms.acknowledged && forms.deletedCount > 0) {
            return { success: true, msg: 'Form deleted successfully' }
        }
    } catch (error) {
        return { success: false, msg: 'Error Deleting form, please try again' }
    }
}
