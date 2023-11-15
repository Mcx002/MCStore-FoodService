import { Collection, Db, MongoClient } from 'mongodb'
import { FoodCreationAttributes, initFoodCollectionIndices } from './food.model'
import { appConfig } from '../config'

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

export const createDatabaseModels = (): [DatabaseModels, MongoClient] => {
    const dbClient = new MongoClient(
        `mongodb://${appConfig.dbUsername}:${appConfig.dbPassword}@${appConfig.dbHost}:${appConfig.dbPort}`
    )
    const db = dbClient.db(appConfig.dbName)
    return [new DatabaseModels(db), dbClient]
}