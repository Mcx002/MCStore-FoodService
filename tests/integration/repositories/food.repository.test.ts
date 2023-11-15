import { MongoClient } from 'mongodb'
import { DatabaseModels, createDatabaseModels } from '../../../src/models'
import { FoodCreationAttributes } from '../../../src/models/food.model'
import { AppRepository } from '../../../src/repositories'
import crypto from 'crypto'
import { ListOptions, SortBy } from '../../../proto_gen/common_pb'

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
            visible: false,
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
            visible: true,
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

describe("FoodRepository.find Test", () => {
    let dbModels: DatabaseModels
    let dbClient: MongoClient

    beforeAll(async () => {
        // prepare db
        [dbModels, dbClient] = createDatabaseModels()

        // prepare data
        await dbModels.foodCollection.insertMany([{
            name: 'Food 1',
            images: [],
            price: 10000,
            qty: 10,
            detail: {
                calories: 100,
                sugar: 5,
                vitamin: {},
            },
            createdAt: new Date('2023-10-10'), // 1696896000
            updatedAt: new Date('2023-11-04'), // 1699056000
            version: 1,
            visible: true,
        }, {
            name: 'Food 2',
            images: [],
            price: 15000,
            qty: 15,
            detail: {
                calories: 250,
                sugar: 10,
                vitamin: {},
            },
            createdAt: new Date('2023-10-15'), // 1697328000
            updatedAt: new Date('2023-11-05'), // 1699142400
            version: 1,
            visible: true,
        }, {
            name: 'Food 3',
            images: [],
            price: 25000,
            qty: 5,
            detail: {
                calories: 400,
                sugar: 12,
                vitamin: {},
            },
            createdAt: new Date('2023-10-25'), // 1698192000
            updatedAt: new Date('2023-11-03'), // 1698969600
            version: 1,
            visible: false,
        }])
    })

    afterAll(async () => {
        await dbModels.foodCollection.drop()
        await dbClient.close()
    })

    test("Should return the whole items", async () => {
        // initialize repo
        const repo = new AppRepository()
        repo.init(dbModels)

        // prepare payload
        const listOptions = new ListOptions()

        // execution
        const result = await repo.foodRepo.find(listOptions)
        expect(result.length).toBe(3)
    })

    test("Should return limit 2", async () => {
        // initialize repo
        const repo = new AppRepository()
        repo.init(dbModels)

        // prepare payload
        const listOptions = new ListOptions()
            .setLimit(2)

        // execution
        const result = await repo.foodRepo.find(listOptions)
        expect(result.length).toBe(2)
        expect(result[0].name).toBe("Food 1")
    })

    test("Should return limit 2 and skip 1", async () => {
        // initialize repo
        const repo = new AppRepository()
        repo.init(dbModels)

        // prepare payload
        const listOptions = new ListOptions()
            .setLimit(2)
            .setSkip(1)

        // execution
        const result = await repo.foodRepo.find(listOptions)
        expect(result.length).toBe(2)
        expect(result[0].name).toBe("Food 2")
    })

    test("Should return descending", async () => {
        // initialize repo
        const repo = new AppRepository()
        repo.init(dbModels)

        // prepare payload
        const listOptions = new ListOptions()
            .setSortBy(new SortBy()
                .setColumn("name").setDirection(SortBy.Direction.DESC))

        // execution
        const result = await repo.foodRepo.find(listOptions)
        expect(result[0].name).toBe("Food 3")
    })

    test("Should return filtered by name", async () => {
        // initialize repo
        const repo = new AppRepository()
        repo.init(dbModels)

        // prepare payload
        const listOptions = new ListOptions()
        const filter = listOptions.getFilterMap()
        filter.set("name", "1")

        // execution
        const result = await repo.foodRepo.find(listOptions)
        expect(result.length).toBe(1)
        expect(result[0].name).toBe("Food 1")
    })

    test("Should return filtered range by price", async () => {
        // initialize repo
        const repo = new AppRepository()
        repo.init(dbModels)

        // prepare payload
        const listOptions = new ListOptions()
        listOptions.getFilterMap()
            .set("price.gt", "15000")
            .set("price.lt", "30000")

        // execution
        const result = await repo.foodRepo.find(listOptions)
        expect(result.length).toBe(2)
        expect(result[0].name).toBe("Food 2")
    })

    test("Should return filtered range by only greater than requested price", async () => {
        // initialize repo
        const repo = new AppRepository()
        repo.init(dbModels)

        // prepare payload
        const listOptions = new ListOptions()
        listOptions.getFilterMap()
            .set("price.gt", "15000")

        // execution
        const result = await repo.foodRepo.find(listOptions)
        expect(result.length).toBe(2)
        expect(result[0].name).toBe("Food 2")
    })

    test("Should return filtered range by createdAt", async () => {
        // initialize repo
        const repo = new AppRepository()
        repo.init(dbModels)

        // prepare payload
        const listOptions = new ListOptions()
            .setSortBy(
                new SortBy().setColumn("createdAt").setDirection(SortBy.Direction.ASC)
            )

        listOptions.getFilterMap()
            .set("createdAt.gt", "1696895000")
            .set("createdAt.lt", "1697329000")

        // execution
        const result = await repo.foodRepo.find(listOptions)
        expect(result.length).toBe(2)
        expect(result[0].name).toBe("Food 1")
    })


    test("Should return filtered range by only greater than requested createdAt", async () => {
        // initialize repo
        const repo = new AppRepository()
        repo.init(dbModels)

        // prepare payload
        const listOptions = new ListOptions()
            .setSortBy(
                new SortBy().setColumn("createdAt").setDirection(SortBy.Direction.ASC)
            )

        listOptions.getFilterMap()
            .set("createdAt.gt", "1697327000")

        // execution
        const result = await repo.foodRepo.find(listOptions)
        expect(result.length).toBe(2)
        expect(result[0].name).toBe("Food 2")
    })

    test("Should return not filtered range by createdAt", async () => {
        // initialize repo
        const repo = new AppRepository()
        repo.init(dbModels)

        // prepare payload
        const listOptions = new ListOptions()
        listOptions.getFilterMap()
            .set("createdAt.gt", "date")
            .set("createdAt.lt", "date")

        // execution
        const result = await repo.foodRepo.find(listOptions)
        expect(result.length).toBe(3)
        expect(result[0].name).toBe("Food 1")
    })

    test("Should return filtered range by updatedAt", async () => {
        // initialize repo
        const repo = new AppRepository()
        repo.init(dbModels)

        // prepare payload
        const listOptions = new ListOptions()
            .setSortBy(
                new SortBy().setColumn("updatedAt").setDirection(SortBy.Direction.ASC)
            )

        listOptions.getFilterMap()
            .set("updatedAt.gt", "1699055000")
            .set("updatedAt.lt", "1699143400")

        // execution
        const result = await repo.foodRepo.find(listOptions)
        expect(result.length).toBe(2)
        expect(result[0].name).toBe("Food 1")
    })


    test("Should return filtered range by only greater than requested updatedAt", async () => {
        // initialize repo
        const repo = new AppRepository()
        repo.init(dbModels)

        // prepare payload
        const listOptions = new ListOptions()
            .setSortBy(
                new SortBy().setColumn("updatedAt").setDirection(SortBy.Direction.ASC)
            )

        listOptions.getFilterMap()
            .set("updatedAt.gt", "1699055000")

        // execution
        const result = await repo.foodRepo.find(listOptions)
        expect(result.length).toBe(2)
        expect(result[0].name).toBe("Food 1")
    })

    test("Should return not filtered range by updatedAt", async () => {
        // initialize repo
        const repo = new AppRepository()
        repo.init(dbModels)

        // prepare payload
        const listOptions = new ListOptions()
        listOptions.getFilterMap()
            .set("updatedAt.gt", "date")
            .set("updatedAt.lt", "date")

        // execution
        const result = await repo.foodRepo.find(listOptions)
        expect(result.length).toBe(3)
        expect(result[0].name).toBe("Food 1")
    })

    test("Should return filtered by calories", async () => {
        // initialize repo
        const repo = new AppRepository()
        repo.init(dbModels)

        // prepare payload
        const listOptions = new ListOptions()
        listOptions.getFilterMap()
            .set("detail.calories.gt", "200")
            .set("detail.calories.lt", "500")

        // execution
        const result = await repo.foodRepo.find(listOptions)
        expect(result.length).toBe(2)
        expect(result[0].name).toBe("Food 2")
    })

    test("Should return filtered by only greater than requested calories", async () => {
        // initialize repo
        const repo = new AppRepository()
        repo.init(dbModels)

        // prepare payload
        const listOptions = new ListOptions()
        listOptions.getFilterMap()
            .set("detail.calories.gt", "100")

        // execution
        const result = await repo.foodRepo.find(listOptions)
        expect(result.length).toBe(3)
        expect(result[0].name).toBe("Food 1")
    })

    test("Should return filtered by sugar", async () => {
        // initialize repo
        const repo = new AppRepository()
        repo.init(dbModels)

        // prepare payload
        const listOptions = new ListOptions()
        listOptions.getFilterMap()
            .set("detail.sugar.gt", "5")
            .set("detail.sugar.lt", "10")

        // execution
        const result = await repo.foodRepo.find(listOptions)
        expect(result.length).toBe(2)
        expect(result[0].name).toBe("Food 1")
    })

    test("Should return filtered by only greater than requested sugar", async () => {
        // initialize repo
        const repo = new AppRepository()
        repo.init(dbModels)

        // prepare payload
        const listOptions = new ListOptions()
        listOptions.getFilterMap()
            .set("detail.sugar.gt", "10")

        // execution
        const result = await repo.foodRepo.find(listOptions)
        expect(result.length).toBe(2)
        expect(result[0].name).toBe("Food 2")
    })

    test("Should return filtered visible", async () => {
        // initialize repo
        const repo = new AppRepository()
        repo.init(dbModels)

        // prepare payload
        const listOptions = new ListOptions()
        listOptions.getFilterMap()
            .set("visible", "true")

        // execution
        const result = await repo.foodRepo.find(listOptions)
        expect(result.length).toBe(2)
        expect(result[0].name).toBe("Food 1")
    })
})