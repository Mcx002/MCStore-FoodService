import { App } from '../../../src/app'
import { appConfig } from '../../../src/config'

describe('CommonService.getHealth Test', () => {
    test('Should return health object', () => {
        // initialize service
        const app = new App()
        app.service.init(app)

        // execute getHealth
        const health = app.service.commonService.getHealth()

        // expect health name equal service name
        expect(health.getName()).toBe(appConfig.serviceName)
    })
})
