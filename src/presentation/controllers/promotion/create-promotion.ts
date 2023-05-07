//import { PromotionCreate } from '@/domain/usecases'
import { IPromotionCreateRepository } from '@/infra/usecases'
import { Controller, HttpResponse, serverError, ok } from '@/presentation/contracts'
import { badRequest } from '@/presentation/help'
import { MissingParamError } from '@/presentation/errors'

export class CreatePromotionController implements Controller {
  constructor (
    private readonly createPromotionRepository: IPromotionCreateRepository,
    ) {}

  async handle (request: CreatePromotionController.Request): Promise<HttpResponse> {
    try {
      for (const field in request){
        if (request[field] === '') {
          return badRequest(new MissingParamError(field))
        }
      }
      const { url, description, url_img,price,title } = request
      //const resp = await this.crawlerHandleRepository.handle(null)
      //const promotion = await this.promotionCreate.create({ url })
      const promotion = await this.createPromotionRepository.create({url, description, url_img,price,title})

      return ok(promotion)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace CreatePromotionController {
  export type Request = {
    url: string
    url_img: string
    title: string
    price: string
    description: string
  }
}
