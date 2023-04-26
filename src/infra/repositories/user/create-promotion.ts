import { Promotion } from '@/infra/models/promotion'
import { AppDataSource } from '@/main/typeorm/config'

export class CreateUserRepository {
  async create (): Promise<string> {
    console.log("dentro do repository do user")
    // const userRepository = AppDataSource.getRepository(Promotion)
    // let promotion = new Promotion()

    // promotion = await this.adapterCreate(promotion, params)

    // await userRepository.manager.save(promotion)

    // delete promotion.created_at
    // delete promotion.updated_at
    // delete promotion.promotion_id
    // return promotion
    return null
  }

  // async adapterCreate (promotion: Promotion, params: PromotionCreateRepository.Params): Promise<Promotion> {
  //   promotion.title = params.title
  //   promotion.price = params.preco
  //   promotion.description = params?.descricao
  //   promotion.url = params.url
  //   promotion.img = params.img

  //   return promotion
  // }
}
