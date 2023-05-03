import { UserCreateController } from '@/presentation/controllers'
import { CreateUserRepository} from '@/infra/repositories/user'
import { Controller } from '@/presentation/contracts'

export const createUserController = (): Controller => {
  const createUserRepository = new CreateUserRepository()
  return new UserCreateController(createUserRepository)
}
