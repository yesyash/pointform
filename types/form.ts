import { Question } from '@/types/question'
import { Response } from '@/types/response'

export interface Form {
    _id: string
    name: string
    category: string
    questions: Array<Question> | Array<Omit<Question, '_id'>>
    responses: Array<Response>
    createdAt: Date
    EditedAt: Date
    creatorTag: string
    isPublic: boolean
}
