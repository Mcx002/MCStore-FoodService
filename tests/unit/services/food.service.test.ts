import { App } from '../../../src/app'
import { FoodDto } from '../../../proto_gen/food_pb'
import { FoodAttributes, FoodCreationAttributes } from '../../../src/models/food.model'
import { ObjectId } from 'mongodb'
import crypto from 'crypto'
import { ListOptions } from '../../../proto_gen/common_pb'
import { getUnixFromDate } from '../../../src/utils/time'

describe('FoodService.create Test', () => {
    test('Should throw error invalid args', () => {
        const app = new App()
        app.service.init(app)

        const service = app.service

        expect(() => service.foodService.create(new FoodDto())).rejects.toThrow(
            'Please put the detail of the food'
        )
    })

    test('Should return FoodDto', async () => {
        // prepare service
        const app = new App()
        app.service.init(app)

        // mock repo
        const id = 'B666C267D37FA04BC73A252E'.toLowerCase()
        const _id = new ObjectId(id)
        jest.spyOn(app.repository.foodRepo, 'insert').mockImplementation(
            async (data: FoodCreationAttributes) => {
                data._id = _id
            }
        )

        // prepare payload
        const foodDtoDetail = new FoodDto.Detail()
            .setCalories(94 + 280)
            .setSugar(0.42)

        foodDtoDetail.getVitaminMap().set('B6', 5).set('D', 17)

        const foodDto = new FoodDto()
            .setName('Telor Dadar + Nasi')
            .setImagesList([])
            .setPrice(15000)
            .setQty(10)
            .setDetail(foodDtoDetail)

        // execute
        const foodResult = await app.service.foodService.create(foodDto)

        expect(foodDto.getName()).toBe(foodResult.getName())
        expect(foodResult.getId()).toBe(id)
    })
})

describe('FoodService.getById Test', () => {
    test("Should throw food not found", () => {
        // prepare service
        const app = new App()
        app.service.init(app)

        // mock repo
        jest.spyOn(app.repository.foodRepo, 'findById').mockImplementation(
            async () => {
                return null
            }
        )

        // execute
        expect(() => app.service.foodService.getById('test')).rejects.toThrow("Food with id: test, not found")
    })
    test("Should return food", async () => {
        // prepare service
        const app = new App()
        app.service.init(app)

        // mock repo
        jest.spyOn(app.repository.foodRepo, 'findById').mockImplementation(
            async (id) => {
                return {
                    _id: new ObjectId(id),
                    name: 'Food',
                    price: 13000,
                    qty: 10,
                    images: [],
                    detail: {
                        calories: 10,
                        sugar: 1,
                        vitamin: {},
                    },
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    version: 1,
                    visible: true,
                }
            }
        )

        // execute
        const id = crypto.randomBytes(12).toString('hex')
        const foodResult = await app.service.foodService.getById(id)

        expect(foodResult.getId()).toBe(id)
    })
})

describe('FoodService.getById Test', () => {
    test("Should return list food", async () => {
        // prepare service
        const app = new App()
        app.service.init(app)

        // mock repo
        const sampleData = {
            _id: new ObjectId(crypto.randomBytes(12).toString('hex')),
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
        }
        jest.spyOn(app.repository.foodRepo, 'find').mockImplementation(
            async () => {
                return [sampleData]
            }
        )

        // prepare payload
        const options = new ListOptions()
        options.setLimit(15)

        // execute
        const list = await app.service.foodService.list(options)
        expect(list.getFoodsList().at(0)?.getId()).toBe(sampleData._id.toString())
        expect(list.getMetadata()?.getLimit()).toBe(options.getLimit())
    })
})

describe('FoodService.update Test', () => {
    test("Should throw invalid argument", async () => {
        // init app
        const app = new App()
        app.service.init(app)

        // prepare payload
        const payload = new FoodDto()
        payload.setId("test")

        // mock update repo
        jest.spyOn(app.repository.foodRepo, "findById").mockImplementation(async () => {
            return null
        })

        expect(() => app.service.foodService.update(payload)).rejects.toThrow(`Food with id: ${payload.getId()}, not found`)
    })

    test("Should throw stale version", async () => {
        // init app
        const app = new App()
        app.service.init(app)

        // prepare payload
        const payload = new FoodDto()
        const payloadDetail = new FoodDto.Detail()
        payloadDetail
            .setCalories(150)
            .setSugar(10)
            .getVitaminMap().set("A", 1)
        payload.setId(crypto.randomBytes(12).toString('hex'))
        payload.setName('Telor Dadar')
        payload.setPrice(15000)
        payload.setQty(20)
        payload.setImagesList(['image-id'])
        payload.setDetail()
        payload.setVisible(true)
        payload.setDetail(payloadDetail)
        payload.setVersion(2)

        // mock update repo
        jest.spyOn(app.repository.foodRepo, "findById").mockImplementation(async () => {
            return {
                _id: new ObjectId(payload.getId()),
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
            }
        })

        expect(() => app.service.foodService.update(payload)).rejects.toThrow(`Stale version`)
    })

    test("Should throw internal no document udpated", async () => {
        // init app
        const app = new App()
        app.service.init(app)

        // prepare payload
        const payload = new FoodDto()
        const payloadDetail = new FoodDto.Detail()
        payloadDetail
            .setCalories(150)
            .setSugar(10)
            .getVitaminMap().set("A", 1)
        payload.setId(crypto.randomBytes(12).toString('hex'))
        payload.setName('Telor Dadar')
        payload.setPrice(15000)
        payload.setQty(20)
        payload.setImagesList(['image-id'])
        payload.setDetail()
        payload.setVisible(true)
        payload.setDetail(payloadDetail)
        payload.setVersion(1)

        // mock update repo
        jest.spyOn(app.repository.foodRepo, "findById").mockImplementation(async () => {
            return {
                _id: new ObjectId(payload.getId()),
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
            }
        })
        jest.spyOn(app.repository.foodRepo, "update").mockImplementation(async () => {
            return 0
        })

        expect(() => app.service.foodService.update(payload)).rejects.toThrow(`No document updated`)
    })

    test("Should update food", async () => {
        // init app
        const app = new App()
        app.service.init(app)

        // prepare payload
        const payload = new FoodDto()
        const payloadDetail = new FoodDto.Detail()
        payloadDetail
            .setCalories(150)
            .setSugar(10)
            .getVitaminMap().set("A", 1)
        payload.setId(crypto.randomBytes(12).toString('hex'))
        payload.setName('Telor Dadar')
        payload.setPrice(15000)
        payload.setQty(20)
        payload.setImagesList(['image-id'])
        payload.setDetail()
        payload.setVisible(true)
        payload.setDetail(payloadDetail)
        payload.setVersion(1)

        // mock update repo
        const mockFood = {
            _id: new ObjectId(payload.getId()),
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
        }
        jest.spyOn(app.repository.foodRepo, "findById").mockImplementation(async () => {
            return Object.assign({}, mockFood)
        })
        jest.spyOn(app.repository.foodRepo, "update").mockImplementation(async () => {
            return 1
        })

        const updateResult = await app.service.foodService.update(payload)

        expect(updateResult.getId()).toBe(payload.getId())
        expect(updateResult.getName()).toBe(payload.getName())
        expect(mockFood.name != updateResult.getName()).toBe(true)
        expect(updateResult.getPrice()).toBe(payload.getPrice())
        expect(updateResult.getImagesList()).toBe(payload.getImagesList())
        expect(updateResult.getQty()).toBe(payload.getQty())

        expect(updateResult.getDetail()?.getCalories()).toBe(payload.getDetail()?.getCalories())
        expect(updateResult.getDetail()?.getSugar()).toBe(payload.getDetail()?.getSugar())
        expect(updateResult.getDetail()?.getVitaminMap().toObject()).toEqual(payload.getDetail()?.getVitaminMap().toObject())

        expect(updateResult.getUpdatedAt() != getUnixFromDate(mockFood.updatedAt)).toBe(true)
        expect(updateResult.getVersion()).toBe(mockFood.version + 1)
    })
})