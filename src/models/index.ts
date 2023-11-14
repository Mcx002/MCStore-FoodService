import { Collection, Db } from 'mongodb'
import { FoodModel, initFoodCollectionIndices } from './food.model'

export interface BaseAttributes {
    createdAt: Date
    updatedAt: Date
    version: number
}

export const createBaseAttributes = (): BaseAttributes => {
    return {
        createdAt: new Date(),
        updatedAt: new Date(),
        version: 1,
    }
}

export class DatabaseModels {
    foodCollection: Collection

    constructor(db: Db) {
        this.foodCollection = initFoodCollectionIndices(db)
    }
}
