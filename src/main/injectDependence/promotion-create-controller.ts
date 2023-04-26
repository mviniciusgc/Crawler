import { CreatePromotionRepository,CrawlerRepository } from '@/infra/repositories'
import { PromotionCreateController } from '@/presentation/controllers'


import { Controller } from '@/presentation/contracts'

export const makePromotionCreateController = (): Controller => {
  const createPromotionRepository = new CreatePromotionRepository()
  const crawlerRepository = new CrawlerRepository()
  return new PromotionCreateController(createPromotionRepository,crawlerRepository)
}
