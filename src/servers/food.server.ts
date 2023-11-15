import {
    ServerErrorResponse,
    ServerUnaryCall,
    sendUnaryData,
} from '@grpc/grpc-js'
import { App } from '../app'
import { BaseServer } from '../interfaces/server.interface'
import { logger } from '../logger'
import { FoodService } from '../services/food.service'
import { FoodDto } from '../../proto_gen/food_pb'
import { PayloadIdString } from '../../proto_gen/common_pb'

export class FoodServer extends BaseServer {
    foodService!: FoodService

    init(app: App): void {
        this.foodService = app.service.foodService
    }

    createFood = async (
        call: ServerUnaryCall<FoodDto, FoodDto>,
        callback: sendUnaryData<FoodDto>
    ) => {
        try {
            const payload = call.request
            const foodDto = await this.foodService.create(payload)

            callback(null, foodDto)
        } catch (e: unknown) {
            const err = e as ServerErrorResponse
            logger.error(JSON.stringify(err))
            callback(err, null)
        }
    }

    getFoodById = async (
        call: ServerUnaryCall<PayloadIdString, FoodDto>,
        callback: sendUnaryData<FoodDto>
    ) => {
        try {
            const payload = call.request
            const foodDto = await this.foodService.getById(payload.getId())

            callback(null, foodDto)
        } catch (e: unknown) {
            const err = e as ServerErrorResponse
            logger.error(JSON.stringify(err))
            callback(err, null)
        }
    }
}
