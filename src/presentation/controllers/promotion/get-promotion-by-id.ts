//import { PromotionCreate } from '@/domain/usecases'
import { IGetPromotionByIDRepository } from '@/infra/usecases'
import { Controller, HttpResponse, serverError, ok } from '@/presentation/contracts'
import { badRequest } from '@/presentation/help'
import { MissingParamError } from '@/presentation/errors'

export class GetPromotionByIDController implements Controller {
  constructor (
    private readonly createPromotionRepository: IGetPromotionByIDRepository,
    ) {}

  async handle (request: GetPromotionByIDController.Request): Promise<HttpResponse> {
    try {

      const { id } = request

      if(id === ""){
        return badRequest(new MissingParamError(id))
      }

      const promotion = await this.createPromotionRepository.getById({promotion_id: id})

      return ok(promotion)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace GetPromotionByIDController {
  export type Request = {
    id: string
  }
}
