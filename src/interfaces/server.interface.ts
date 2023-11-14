import { App } from '../app'

export abstract class BaseServer {
    abstract init(app: App): void
}
