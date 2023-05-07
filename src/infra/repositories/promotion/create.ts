import  { Promotion }  from '../entities/promotion'
import { AppDataSource } from '../database/typeorm/config'
import {IPromotionCreateRepository} from '@/infra/usecases'

export class CreatePromotionRepository implements IPromotionCreateRepository {
  async create (params: IPromotionCreateRepository.Params): Promise<IPromotionCreateRepository.Result> {

    console.log(params)
    const userRepository = AppDataSource.getRepository(Promotion)
    const newPromotion = await this.adapterRequest(params, new Promotion())
    const promotionResponse = await userRepository.manager.save(newPromotion)

    delete promotionResponse.created_at
    delete promotionResponse.updated_at

    return promotionResponse
  }

  async adapterRequest ({title, url, description, url_img, price}: IPromotionCreateRepository.Params, newPromotion: Promotion): Promise<Promotion> {
    
    newPromotion.url = url
    newPromotion.title = title
    newPromotion.price = price
    newPromotion.description = description
    newPromotion.url_img = url_img

    return newPromotion
  }
}
