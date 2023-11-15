import { Collection, Filter, ObjectId } from 'mongodb'
import { BaseRepo } from '../interfaces/repository.interface'
import { FoodAttributes, FoodCreationAttributes, FoodModel } from '../models/food.model'
import { DatabaseModels } from '../models'
import { ListOptions } from '../../proto_gen/common_pb'
import { getDateFromUnix } from '../utils/time'
import { stringToBool } from '../utils/value'

export class FoodRepository extends BaseRepo {
    private foodCollection!: Collection<FoodModel>

    init(db: DatabaseModels): void {
        this.foodCollection = db.foodCollection
    }

    insert = async (data: FoodCreationAttributes): Promise<void> => {
        const { insertedId } = await this.foodCollection.insertOne(data)
        data._id = insertedId
    }

    findById = async (id: string): Promise<FoodAttributes | null> => {
        return this.foodCollection.findOne<FoodAttributes>({ _id: new ObjectId(id) })
    }

    find = async (options: ListOptions): Promise<FoodAttributes[]> => {
        // prepare filter
        const filter: Filter<FoodAttributes> = {}
        this.prepareFindFilter(filter, options)

        const sort = options.getSortBy()

        const list = await this.foodCollection.find(filter, {
            limit: options.getLimit(),
            skip: options.getSkip(),
            sort: sort ? [[sort.getColumn(), sort.getDirection() == 1 ? -1 : 1]] : undefined,
        })

        return list.toArray()
    }

    private prepareFindFilter = (filter: Filter<FoodAttributes>, options: ListOptions) => {
        const name = options.getFilterMap().get("name")

        const priceGt = options.getFilterMap().get("price.gt")
        const priceLt = options.getFilterMap().get("price.lt")

        const createdAtGt = options.getFilterMap().get("createdAt.gt")
        const createdAtGtUnix = createdAtGt ? parseInt(createdAtGt) : undefined;
        const createdAtGtDate = createdAtGtUnix && !Number.isNaN(createdAtGtUnix) ? getDateFromUnix(createdAtGtUnix) : undefined

        const createdAtLt = options.getFilterMap().get("createdAt.lt")
        const createdAtLtUnix = createdAtLt ? parseInt(createdAtLt) : undefined;
        const createdAtLtDate = createdAtLtUnix && !Number.isNaN(createdAtLtUnix) ? getDateFromUnix(createdAtLtUnix) : undefined

        const updatedAtGt = options.getFilterMap().get("updatedAt.gt")
        const updatedAtGtUnix = updatedAtGt ? parseInt(updatedAtGt) : undefined;
        const updatedAtGtDate = updatedAtGtUnix && !Number.isNaN(updatedAtGtUnix) ? getDateFromUnix(updatedAtGtUnix) : undefined

        const updatedAtLt = options.getFilterMap().get("updatedAt.lt")
        const updatedAtLtUnix = updatedAtLt ? parseInt(updatedAtLt) : undefined;
        const updatedAtLtDate = updatedAtLtUnix && !Number.isNaN(updatedAtLtUnix) ? getDateFromUnix(updatedAtLtUnix) : undefined

        const caloriesGt = options.getFilterMap().get("detail.calories.gt")
        const caloriesLt = options.getFilterMap().get("detail.calories.lt")

        const sugarGt = options.getFilterMap().get("detail.sugar.gt")
        const sugarLt = options.getFilterMap().get("detail.sugar.lt")

        const visible = options.getFilterMap().get("visible")

        if (name) {
            filter.name = {
                $regex: new RegExp(`.*${name}.*`)
            }
        }

        if (priceGt || priceLt) {
            filter.price = {}
            if (priceGt) {
                filter.price.$gte = parseInt(priceGt)
            }
            if (priceLt) {
                filter.price.$lte = parseInt(priceLt)
            }
        }

        if (createdAtGtDate || createdAtLtDate) {
            filter.createdAt = {}
            if (createdAtGtDate) {
                filter.createdAt.$gte = createdAtGtDate
            }
            if (createdAtLtDate) {
                filter.createdAt.$lte = createdAtLtDate
            }
        }

        if (updatedAtGtDate || updatedAtLtDate) {
            filter.updatedAt = {}
            if (updatedAtGtDate) {
                filter.updatedAt.$gte = updatedAtGtDate
            }
            if (updatedAtLtDate) {
                filter.updatedAt.$lte = updatedAtLtDate
            }
        }

        if (caloriesGt || caloriesLt) {
            filter["detail.calories"] = {}
            if (caloriesGt) {
                filter["detail.calories"].$gte = parseInt(caloriesGt)
            }
            if (caloriesLt) {
                filter["detail.calories"].$lte = parseInt(caloriesLt)
            }
        }

        if (sugarGt || sugarLt) {
            filter["detail.sugar"] = {}
            if (sugarGt) {
                filter["detail.sugar"].$gte = parseInt(sugarGt)
            }
            if (sugarLt) {
                filter["detail.sugar"].$lte = parseInt(sugarLt)
            }
        }

        if (visible) {
            filter.visible = stringToBool(visible, true)
        }
    }
}
