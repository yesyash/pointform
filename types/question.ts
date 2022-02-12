export interface Option {
    _id: string
    value: string
    weight?: number
}

export interface Question {
    _id: string
    question: string
    type: 'mcq' | 'tf'
    options: Array<Option>
    required: boolean
    order: number
}
