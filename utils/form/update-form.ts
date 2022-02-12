import { Collection, ObjectId } from 'mongodb'

import { Form } from '@/types/form'

export async function updateFrom(formId: Form['_id'], collection: Collection) {
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

    let updateDoc = await collection.findOneAndUpdate(
        { _id: new ObjectId(formId) },
        form
    )

    return updateDoc
}
