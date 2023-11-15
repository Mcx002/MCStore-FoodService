import { createDatabaseModels } from '../../../src/models'
import { FoodCreationAttributes } from '../../../src/models/food.model'
import { AppRepository } from '../../../src/repositories'
import crypto from 'crypto'

describe('FoodRepository.insert Test', () => {
    test('Should insert food to the db', async () => {
        // prepare db model
        const [dbModels, dbClient] = createDatabaseModels()

        // initialize repo
        const repo = new AppRepository()
        repo.init(dbModels)

        // prepare food creation attr
        const foodModel: FoodCreationAttributes = {
            name: 'test',
            images: [],
            price: 0,
            qty: 0,
            detail: {
                calories: 0,
                sugar: 0,
                vitamin: {},
            },
            createdAt: new Date(),
            updatedAt: new Date(),
            version: 1,
        }

        // execute
        await repo.foodRepo.insert(foodModel)

        expect(foodModel._id).toBeDefined()

        // closing
        await dbModels.foodCollection.deleteOne({ _id: foodModel._id })
        dbClient.close()
    })
})

describe("FoodRepository.findOne Test", () => {
    test("Should return null", async () => {
        // prepare db
        const [dbModels] = createDatabaseModels()

        // initialize repo
        const repo = new AppRepository()
        repo.init(dbModels)

        // execute
        const id = crypto.randomBytes(12).toString('hex')
        const foodResult = await repo.foodRepo.findById(id)

        expect(foodResult).toBeNull()
    })

    test("Should return food", async () => {
        // prepare db
        const [dbModels, dbClient] = createDatabaseModels()

        // initialize repo
        const repo = new AppRepository()
        repo.init(dbModels)

        // prepare stored data
        const foodModel: FoodCreationAttributes = {
            name: 'test',
            images: [],
            price: 0,
            qty: 0,
            detail: {
                calories: 0,
                sugar: 0,
                vitamin: {},
            },
            createdAt: new Date(),
            updatedAt: new Date(),
            version: 1,
        }
        const { insertedId } = await dbModels.foodCollection.insertOne(foodModel)
        foodModel._id = insertedId

        // execute
        const foodResult = await repo.foodRepo.findById(foodModel._id.toString())

        expect(foodResult?._id).toStrictEqual(foodModel._id)

        // closing
        await dbModels.foodCollection.deleteOne({ _id: foodModel._id })
        dbClient.close()
    })
})