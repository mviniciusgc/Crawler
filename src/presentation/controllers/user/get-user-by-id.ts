import { Controller, HttpResponse, serverError, ok } from '@/presentation/contracts'
import { badRequest } from '@/presentation/help'
import { MissingParamError } from '@/presentation/errors'
import {IGetUserByIDRepository} from '@/infra/usecases'

export class GetUserByIdController implements Controller {
  constructor (
    private readonly getUserByIDRepository: IGetUserByIDRepository
    ) {}

    async handle (request: GetUserByIdController.Request): Promise<HttpResponse> {
    try {

      const { id } = request

      if(id === ""){
        return badRequest(new MissingParamError(id))
      }

      const resp = await this.getUserByIDRepository.getById({id})

      return ok(resp)
    } catch (error) {
      return serverError(error)
    }
  }
}

export namespace GetUserByIdController {
  export type Request = {
    id: string
  }
}
