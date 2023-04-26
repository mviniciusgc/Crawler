import { Controller, HttpResponse, serverError, ok } from '@/presentation/contracts'
import { badRequest } from '@/presentation/help'
import { MissingParamError } from '@/presentation/errors'
import { CreateUserRepository} from '@/infra/repositories/user'

export class UserCreateController implements Controller {
  constructor (
    private readonly createUserRepository: CreateUserRepository
    ) {}

  async handle (request: PromotionCreateController.Request): Promise<HttpResponse> {
    try {
      const { url } = request
      if (url === '') {
        return badRequest(new MissingParamError(url))
      }
      // console.log("dentro do presentation")
       const resp = await this.createUserRepository.create()
      // //const promotion = await this.promotionCreate.create({ url })
      // const promotion = await this.createPromotionRepository.create()
      return ok(null)
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
