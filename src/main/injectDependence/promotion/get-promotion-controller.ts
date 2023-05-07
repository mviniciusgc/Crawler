import { GetPromotionByIDController } from '@/presentation/controllers'
import { GetPromotionByIDRepository} from '@/infra/repositories/promotion'
import { Controller } from '@/presentation/contracts'

export const getPromotionController = (): Controller => {
  const getPromotionByIDRepository = new GetPromotionByIDRepository()
  return new GetPromotionByIDController(getPromotionByIDRepository)
}
