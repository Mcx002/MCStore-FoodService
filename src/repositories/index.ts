import { DatabaseModels } from '../models'
import { FoodRepository } from './food.repository'

export class AppRepository {
    foodRepo: FoodRepository = new FoodRepository()

    init(db: DatabaseModels): void {
        this.foodRepo.init(db)
    }
}
