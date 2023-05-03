import { PromotionCreateController } from '@/presentation/controllers'
import { CreatePromotionRepository} from '@/infra/repositories/promotion'
import { Controller } from '@/presentation/contracts'

export const makePromotionCreateController = (): Controller => {
  const createPromotionRepository = new CreatePromotionRepository()
  return new PromotionCreateController(createPromotionRepository)
}
