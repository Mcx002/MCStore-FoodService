import { Collection, Db, OptionalId } from 'mongodb'

export interface FoodDetail {
    calories: number
    vitamin: Record<string, number>
    sugar: number
}

interface Food {
    name: string
    images: string[]
    price: number
    qty: number
    detail: FoodDetail
}

export type FoodModel = OptionalId<Food>

export const FOOD_COLLECTION = 'food'

export const initFoodCollectionIndices = (db: Db): Collection => {
    const collection = db.collection(FOOD_COLLECTION)

    collection.createIndex({ price: 1 })
    collection.createIndex({ createdAt: -1 })
    collection.createIndex({ updatedAt: -1 })

    return collection
}
