import { Collection, Db, OptionalId, WithId, Document } from 'mongodb'
import { BaseAttributes } from '.'

export interface FoodDetail {
    calories: number
    vitamin: Record<string, number>
    sugar: number
}

export interface FoodModel extends BaseAttributes {
    name: string
    images: string[]
    price: number
    qty: number
    detail: FoodDetail
    visible: boolean
}

export type FoodCreationAttributes = OptionalId<FoodModel>
export type FoodAttributes = WithId<FoodModel>

export const FOOD_COLLECTION = 'food'

export const initFoodCollectionIndices = (db: Db): Collection<FoodModel> => {
    const collection = db.collection<FoodModel>(FOOD_COLLECTION)

    collection.createIndex({ price: 1 })
    collection.createIndex({ createdAt: -1 })
    collection.createIndex({ updatedAt: -1 })

    return collection
}
