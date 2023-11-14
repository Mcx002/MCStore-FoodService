import { App } from '../../../src/app'
import { FoodDto } from '../../../proto_gen/food_pb'
import { FoodModel } from '../../../src/models/food.model'
import { ObjectId } from 'mongodb'

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
            async (data: FoodModel) => {
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
