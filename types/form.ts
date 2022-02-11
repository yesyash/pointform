import { Question } from '@/types/question'
import { Response } from '@/types/response'

export interface Form {
    id: string
    name: string
    category: string
    questions: Array<Question>
    responses: Array<Response>
    createdAt: number
    EditedAt: number
    creatorTag: string
    isPublic: boolean
}
