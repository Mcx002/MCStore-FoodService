import { appConfig } from '../../../src/config'
import { DatabaseModels } from '../../../src/models'
import { FOOD_COLLECTION, FoodModel } from '../../../src/models/food.model'
import { AppRepository } from '../../../src/repositories'
import { MongoClient } from 'mongodb'

describe('Repository Food Test', () => {
    test('Should insert food to the db', async () => {
        const dbClient = new MongoClient(
            `mongodb://${appConfig.dbUsername}:${appConfig.dbPassword}@${appConfig.dbHost}:${appConfig.dbPort}`
        )
        const db = dbClient.db(appConfig.dbName)
        const dbModels = new DatabaseModels(db)

        const repo = new AppRepository()
        repo.init(dbModels)

        const foodModel: FoodModel = {
            name: 'test',
            images: [],
            price: 0,
            qty: 0,
            detail: {
                calories: 0,
                sugar: 0,
                vitamin: {},
            },
        }

        await repo.foodRepo.insert(foodModel)

        expect(foodModel._id).toBeDefined()

        await db.collection(FOOD_COLLECTION).deleteOne({ _id: foodModel._id })

        dbClient.close()
    })
})
