import { Server } from '@grpc/grpc-js'
import { FoodService } from '../../proto_gen/food-svc_grpc_pb'
import { App } from '../app'
import { CommonServer } from './common.server'
import { FoodServer } from './food.server'

export class AppServer extends Server {
    // server creations
    commonServer = new CommonServer()
    foodServer = new FoodServer()

    // server initiation
    init(app: App): void {
        this.commonServer.init(app)
        this.foodServer.init(app)

        // Auth Service Route
        this.addService(FoodService, {
            getHealth: this.commonServer.getHealth,
            createFood: this.foodServer.createFood,
        })
    }
}
