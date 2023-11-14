import { App } from '../app'
import { CommonService } from './common.service'
import { FoodService } from './food.service'

export default class AppService {
    // instance creation
    commonService: CommonService = new CommonService()
    foodService: FoodService = new FoodService()

    init(app: App) {
        // services initiation
        this.commonService.init(app)
        this.foodService.init(app)
    }
}
