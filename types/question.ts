export interface Option {
    id: string
    value: string
    weight?: number
}

export interface Question {
    id: string
    question: string
    type: 'mcq' | 'tf'
    options: Array<Option>
    required: boolean
    order: number
}
