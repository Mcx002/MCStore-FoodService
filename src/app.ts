import { AppRepository } from './repositories'
import { AppServer } from './servers'
import AppService from './services'

export class App {
    service = new AppService()
    repository = new AppRepository()
    server = new AppServer()
}
