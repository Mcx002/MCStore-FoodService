import { DatabaseModels } from '../models'

export abstract class BaseRepo {
    abstract init(db: DatabaseModels): void
}
