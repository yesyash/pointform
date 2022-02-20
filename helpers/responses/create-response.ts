import { Collection } from 'mongodb'

import { ApiResponse } from '@/types/api-response'
import { CreateResponseType, Response } from '@/types/response'

export async function createResponse(
    response: CreateResponseType,
    collection: Collection
): Promise<ApiResponse> {
    try {
        let result = await collection.insertOne(response)

        if (result.acknowledged)
            return {
                success: true,
                msg: 'Response received successfully',
            }
        else
            return {
                success: false,
                msg: 'Unable to process your response, please try again',
            }
    } catch (error) {
        return {
            success: false,
            msg: 'Error receiving response, please try again',
        }
    }
}
