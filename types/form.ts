import { Question } from '@/types/question'
import { Response } from '@/types/response'

export interface Form {
    _id: string
    name: string
    category: string
    questions: Array<Question> | Array<Omit<Question, '_id'>>
    responses: Array<Response>
    createdAt: Date
    updatedAt: Date
    creatorTag: string
    isPublic: boolean
}

export type CreateFormType = Omit<
    Form,
    '_id' | 'responses' | 'createdAt' | 'updatedAt'
>

export type UpdateFormType = Omit<CreateFormType, 'creatorTag'>
