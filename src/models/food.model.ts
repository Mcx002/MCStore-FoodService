import { Collection, Db, OptionalId, WithId } from 'mongodb'
import { BaseAttributes } from '.'

export interface FoodDetail {
    calories: number
    vitamin: Record<string, number>
    sugar: number
}

interface Food extends BaseAttributes {
    name: string
    images: string[]
    price: number
    qty: number
    detail: FoodDetail
}

export type FoodCreationAttributes = OptionalId<Food>
export type FoodAttributes = WithId<Food>

export const FOOD_COLLECTION = 'food'

export const initFoodCollectionIndices = (db: Db): Collection => {
    const collection = db.collection(FOOD_COLLECTION)

    collection.createIndex({ price: 1 })
    collection.createIndex({ createdAt: -1 })
    collection.createIndex({ updatedAt: -1 })

    return collection
}
