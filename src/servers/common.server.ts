import {
    ServerErrorResponse,
    ServerUnaryCall,
    sendUnaryData,
} from '@grpc/grpc-js'
import { App } from '../app'
import { BaseServer } from '../interfaces/server.interface'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
import { Health } from '../../proto_gen/common_pb'
import { CommonService } from '../services/common.service'
import { logger } from '../logger'

export class CommonServer extends BaseServer {
    commonService!: CommonService

    init(app: App): void {
        this.commonService = app.service.commonService
    }

    getHealth = (
        _: ServerUnaryCall<Empty, Health>,
        callback: sendUnaryData<Health>
    ) => {
        try {
            const health = this.commonService.getHealth()

            callback(null, health)
        } catch (e: unknown) {
            const err = e as ServerErrorResponse
            logger.error(JSON.stringify(err))
            callback(err, null)
        }
    }
}
