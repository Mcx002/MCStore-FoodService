import { Collection, ObjectId } from 'mongodb'
import { BaseRepo } from '../interfaces/repository.interface'
import { FoodAttributes, FoodCreationAttributes } from '../models/food.model'
import { DatabaseModels } from '../models'

export class FoodRepository extends BaseRepo {
    private foodCollection!: Collection

    init(db: DatabaseModels): void {
        this.foodCollection = db.foodCollection
    }

    insert = async (data: FoodCreationAttributes): Promise<void> => {
        const { insertedId } = await this.foodCollection.insertOne(data)
        data._id = insertedId
    }

    findById = async (id: string): Promise<FoodAttributes | null> => {
        return this.foodCollection.findOne<FoodAttributes>({ _id: new ObjectId(id) })
    }
}
