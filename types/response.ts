export interface ResponseItem {
    _id: string
    questionId: string
    answer: string
}

export type CreateResponseItemType = Omit<ResponseItem, '_id'>

export interface Response {
    _id: string
    responseId: string
    responses: CreateResponseItemType[]
    startedOn: Date
    finishedAt: Date
}

export type CreateResponseType = Omit<Response, '_id'>
