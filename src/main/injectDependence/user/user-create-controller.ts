import { UserCreateController } from '@/presentation/controllers/user'
import { Controller } from '@/presentation/contracts'
import { CreateUserRepository} from '@/infra/repositories/user'

export const makeUserCreateController = (): Controller => {
  const createUserRepository = new CreateUserRepository()
  return new UserCreateController(createUserRepository)
}
