import { Promotion } from '@/infra/models/promotion'
import { AppDataSource } from './database/typeorm/config'

export class GetPromotionURL {
  async get (): Promise<string> {
    // const userRepository = AppDataSource.getRepository(Promotion)

    // const promotion = await userRepository.findOneBy({
    //   url: params.url
    // })
    // return { ...promotion }
    return null
  }
}
