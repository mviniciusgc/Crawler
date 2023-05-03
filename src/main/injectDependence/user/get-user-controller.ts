import { GetUserByIdController } from '@/presentation/controllers'
import { GetUserByIDRepository} from '@/infra/repositories/user'
import { Controller } from '@/presentation/contracts'

export const getUserController = (): Controller => {
  const getUserByIDRepository = new GetUserByIDRepository()
  return new GetUserByIdController(getUserByIDRepository)
}
