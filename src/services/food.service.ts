import { App } from '../app'
import { BaseService } from '../interfaces/service.interface'
import { FoodAttributes, FoodCreationAttributes, FoodModel } from '../models/food.model'
import { FoodRepository } from '../repositories/food.repository'
import { FoodDto, ListFoodDto } from '../../proto_gen/food_pb'
import { ErrorHandler } from '../adapter/error.adapter'
import { Status } from '@grpc/grpc-js/build/src/constants'
import { getUnixFromDate } from '../utils/time'
import { ListMetadata, ListOptions } from '../../proto_gen/common_pb'
import { MatchKeysAndValues } from 'mongodb'

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
            visible: payload.getVisible()
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
            .setVisible(data.visible)
    }

    list = async (options: ListOptions): Promise<ListFoodDto> => {
        // find
        const data = await this.foodRepo.find(options)

        // compose
        return this.composeListFoodDto(data, options)
    }

    private composeListFoodDto = (foods: FoodAttributes[], options: ListOptions): ListFoodDto => {
        const listFoodDto = new ListFoodDto()
        for (const val of foods) {
            listFoodDto.addFoods(this.composeFoodDto(val))
        }
        const listMetadata = new ListMetadata()
            .setLimit(options.getLimit())
            .setSkip(options.getSkip())
            .setSortBy(options.getSortBy())
        listFoodDto.setMetadata(listMetadata)

        return listFoodDto
    }

    update = async (payload: FoodDto): Promise<FoodDto> => {
        // find food by id
        const food = await this.foodRepo.findById(payload.getId())
        if (!food) {
            throw new ErrorHandler(Status.INVALID_ARGUMENT, `Food with id: ${payload.getId()}, not found`)
        }

        if (payload.getVersion() !== food.version) {
            throw new ErrorHandler(Status.INVALID_ARGUMENT, "Stale version")
        }

        const vitamin: Record<string, number> = {}
        for (const [key, val] of payload.getDetail()!.getVitaminMap().toObject()) {
            vitamin[key] = val
        }

        // prepare updated value
        const updatedValue: MatchKeysAndValues<FoodModel> = {
            name: payload.getName(),
            price: payload.getPrice(),
            qty: payload.getQty(),
            images: payload.getImagesList(),
            "detail.calories": payload.getDetail()!.getCalories(),
            "detail.sugar": payload.getDetail()!.getSugar(),
            "detail.vitamin": vitamin,
            visible: payload.getVisible(),
            version: food.version + 1,
            updatedAt: new Date(),
        }

        // execute update
        const count = await this.foodRepo.update(food._id, updatedValue, payload.getVersion())
        if (count === 0) {
            throw new ErrorHandler(Status.INTERNAL, "No document updated")
        }

        // update food model
        food.name = updatedValue.name!
        food.price = updatedValue.price!
        food.qty = updatedValue.qty!
        food.images = updatedValue.images!
        food.detail.calories = updatedValue["detail.calories"]!
        food.detail.sugar = updatedValue["detail.sugar"]!
        food.detail.vitamin = updatedValue["detail.vitamin"]!
        food.visible = updatedValue.visible!
        food.version = updatedValue.version!
        food.updatedAt = updatedValue.updatedAt!

        return this.composeFoodDto(food)
    }
}
