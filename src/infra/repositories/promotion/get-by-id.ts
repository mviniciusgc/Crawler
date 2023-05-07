import  { Promotion }  from '../entities/promotion'
import { AppDataSource } from '../database/typeorm/config'
import {IGetPromotionByIDRepository} from '@/infra/usecases'

export class GetPromotionByIDRepository implements IGetPromotionByIDRepository {
  async getById(params: IGetPromotionByIDRepository.Params): Promise<IGetPromotionByIDRepository.Result> {

    const promotionRepository = AppDataSource.getRepository(Promotion)
    const promotionResponse = await promotionRepository.findOne({
      where: {
        promotion_id: params.promotion_id,
      },
      relations: {
        message: true,
      },

    })

    return promotionResponse
  }

}
