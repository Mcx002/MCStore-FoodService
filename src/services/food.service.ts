import { App } from '../app'
import { BaseService } from '../interfaces/service.interface'
import { FoodModel } from '../models/food.model'
import { FoodRepository } from '../repositories/food.repository'
import { FoodDto } from '../../proto_gen/food_pb'
import { ErrorHandler } from '../adapter/error.adapter'
import { Status } from '@grpc/grpc-js/build/src/constants'

export class FoodService extends BaseService {
    foodRepo!: FoodRepository

    init(app: App): void {
        this.foodRepo = app.repository.foodRepo
    }

    create = async (payload: FoodDto): Promise<FoodDto> => {
        // ensure the detail payload is exists
        const payloadDetail = payload.getDetail()
        if (!payloadDetail) {
            throw new ErrorHandler(
                Status.INVALID_ARGUMENT,
                'Please put the detail of the food'
            )
        }

        // map vitamin to record
        const vitamin: Record<string, number> = {}
        for (const [key, val] of payloadDetail.getVitaminMap().toObject()) {
            vitamin[key] = val
        }

        // create food model
        const foodModel: FoodModel = {
            name: payload.getName(),
            price: payload.getPrice(),
            qty: payload.getQty(),
            images: payload.getImagesList(),
            detail: {
                calories: payloadDetail.getCalories(),
                sugar: payloadDetail.getSugar(),
                vitamin,
            },
        }

        // execute insert
        await this.foodRepo.insert(foodModel)

        // return
        return this.composeFoodDto(foodModel)
    }

    composeFoodDto = (data: FoodModel): FoodDto => {
        const foodDtoDetail = new FoodDto.Detail()
            .setCalories(data.detail.calories)
            .setSugar(data.detail.sugar)

        for (const key in data.detail.vitamin) {
            foodDtoDetail.getVitaminMap().set(key, data.detail.vitamin[key])
        }

        return new FoodDto()
            .setName(data.name)
            .setImagesList(data.images)
            .setPrice(data.price)
            .setQty(data.qty)
            .setDetail(foodDtoDetail)
            .setId(data._id!.toString())
    }
}
