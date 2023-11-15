import { App } from '../../../src/app'
import { FoodDto } from '../../../proto_gen/food_pb'
import { FoodAttributes, FoodCreationAttributes } from '../../../src/models/food.model'
import { ObjectId } from 'mongodb'
import crypto from 'crypto'
import { ListOptions } from '../../../proto_gen/common_pb'

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