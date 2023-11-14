import { Collection } from 'mongodb'
import { BaseRepo } from '../interfaces/repository.interface'
import { FoodModel } from '../models/food.model'
import { DatabaseModels } from '../models'

export class FoodRepository extends BaseRepo {
    private foodCollection!: Collection

    init(db: DatabaseModels): void {
        this.foodCollection = db.foodCollection
    }

    insert = async (data: FoodModel): Promise<void> => {
        const { insertedId } = await this.foodCollection.insertOne(data)
        data._id = insertedId
    }
}
