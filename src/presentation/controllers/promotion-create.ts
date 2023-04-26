//import { PromotionCreate } from '@/domain/usecases'
import { CreatePromotionRepository, CrawlerRepository } from '@/infra/repositories'
import { Controller, HttpResponse, serverError, ok } from '@/presentation/contracts'
import { badRequest } from '@/presentation/help'
import { MissingParamError } from '@/presentation/errors'

export class PromotionCreateController implements Controller {
  constructor (
    private readonly createPromotionRepository: CreatePromotionRepository,
    private readonly crawlerHandleRepository: CrawlerRepository
    
    ) {}

  async handle (request: PromotionCreateController.Request): Promise<HttpResponse> {
    try {
      const { url } = request
      if (url === '') {
        return badRequest(new MissingParamError(url))
      }
      console.log("dentro do presentation")
      const resp = await this.crawlerHandleRepository.handle(null)
      //const promotion = await this.promotionCreate.create({ url })
      const promotion = await this.createPromotionRepository.create()
      return ok(promotion)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace PromotionCreateController {
  export type Request = {
    url: string
  }
}
