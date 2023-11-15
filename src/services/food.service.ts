import { App } from '../app'
import { BaseService } from '../interfaces/service.interface'
import { FoodAttributes, FoodCreationAttributes } from '../models/food.model'
import { FoodRepository } from '../repositories/food.repository'
import { FoodDto } from '../../proto_gen/food_pb'
import { ErrorHandler } from '../adapter/error.adapter'
import { Status } from '@grpc/grpc-js/build/src/constants'
import { getUnixFromDate } from '../utils/time'

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
        const foodModel: FoodCreationAttributes = {
            name: payload.getName(),
            price: payload.getPrice(),
            qty: payload.getQty(),
            images: payload.getImagesList(),
            detail: {
                calories: payloadDetail.getCalories(),
                sugar: payloadDetail.getSugar(),
                vitamin,
            },
            createdAt: new Date(),
            updatedAt: new Date(),
            version: 1,
        }

        // execute insert
        await this.foodRepo.insert(foodModel)

        // return
        return this.composeFoodDto(foodModel as FoodAttributes)
    }

    getById = async (id: string): Promise<FoodDto> => {
        // find food by id
        const data = await this.foodRepo.findById(id)
        if (!data) {
            throw new ErrorHandler(Status.INVALID_ARGUMENT, `Food with id: ${id}, not found`)
        }

        return this.composeFoodDto(data)
    }

    composeFoodDto = (data: FoodAttributes): FoodDto => {
        // compose foodDtoDetail
        const foodDtoDetail = new FoodDto.Detail()
            .setCalories(data.detail.calories)
            .setSugar(data.detail.sugar)

        // compose vitamin foodDtoDetail
        for (const key in data.detail.vitamin) {
            foodDtoDetail.getVitaminMap().set(key, data.detail.vitamin[key])
        }

        // compose foodDto
        return new FoodDto()
            .setName(data.name)
            .setImagesList(data.images)
            .setPrice(data.price)
            .setQty(data.qty)
            .setDetail(foodDtoDetail)
            .setId(data._id!.toString())
            .setCreatedAt(getUnixFromDate(data.createdAt))
            .setUpdatedAt(getUnixFromDate(data.updatedAt))
            .setVersion(data.version)
    }
}
