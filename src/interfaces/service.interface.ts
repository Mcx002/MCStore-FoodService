import { App } from '../app'

export abstract class BaseService {
    abstract init(app: App): void
}
