//import { PromotionCreate } from '@/domain/usecases'
import { IMessageCreateRepository } from '@/infra/usecases'
import { Controller, HttpResponse, serverError, ok } from '@/presentation/contracts'
import { badRequest } from '@/presentation/help'
import { MissingParamError } from '@/presentation/errors'

export class MessageCreateController implements Controller {
  constructor (
    private readonly messageCreateRepository: IMessageCreateRepository,
    ) {}

  async handle (request: MessageCreateController.Request): Promise<HttpResponse> {
    try {
      for (const field in request){
        if (request[field] === '') {
          return badRequest(new MissingParamError(field))
        }
      }
      const { promotion_id, user_id, description} = request

      const message = await this.messageCreateRepository.create({promotion_id, user_id, description})

      return ok(message)
      
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace MessageCreateController {
  export type Request = {
    promotion_id: string
    user_id: string
    description: string
  }
}
