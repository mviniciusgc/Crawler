import { Controller, HttpResponse, serverError, ok } from '@/presentation/contracts'
import { badRequest,conflictRequest } from '@/presentation/help'
import { MissingParamError } from '@/presentation/errors'
import {IUserCreateRepository} from '@/infra/usecases'

export class UserCreateController implements Controller {
  constructor (
    private readonly createUserRepository: IUserCreateRepository
    ) {}

    async handle (request: UserCreateController.Request): Promise<HttpResponse> {
    try {
      console.log("bateu no controller")
      console.log(request)
      for (const field in request){
        if (request[field] === '') {
          return badRequest(new MissingParamError(field))
        }
      }
      const { name, email, nick_name, password } = request
      const resp = await this.createUserRepository.create({name, email, nick_name,password })

      return ok(resp)
    } catch (error) {

      const {code} = error.response.data.Err
      if(code === 409){
      return conflictRequest(error.response.data)
      }else{
        return serverError(error)
      }
    }
  }
}

export namespace UserCreateController {
  export type Request = {
    name: string
    nick_name: string
    email: string
    password: string
  }
}
