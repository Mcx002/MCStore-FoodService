import { Health } from '../../proto_gen/common_pb'
import { App } from '../app'
import { appConfig } from '../config'
import { BaseService } from '../interfaces/service.interface'
import { serverLifetime } from '../utils/server'

export class CommonService extends BaseService {
    init(_: App): void {}

    getHealth = () => {
        // Compose result
        const health = new Health()
        health.setName(appConfig.serviceName)
        health.setVersion(appConfig.serviceVersion)
        health.setLifetime(serverLifetime.getTimestamp())

        return health
    }
}
