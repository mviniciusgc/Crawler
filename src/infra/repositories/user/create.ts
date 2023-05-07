import  { User }  from '../entities/user'
import { AppDataSource } from '../database/typeorm/config'
import {IUserCreateRepository} from '@/infra/usecases'

export class CreateUserRepository implements IUserCreateRepository {
  async create (params: IUserCreateRepository.Params): Promise<IUserCreateRepository.Result> {
    
    const userRepository = AppDataSource.getRepository(User)
    const newUser = await this.adapterRequest(params, new User())
    const userResponse = await userRepository.manager.save(newUser)
 
    delete userResponse.created_at
    delete userResponse.updated_at

    return userResponse
  }

  async adapterRequest ({name,nick_name,email}: IUserCreateRepository.Params, newUser: User): Promise<User> {
    newUser.name = name
    newUser.nick_name = nick_name
    newUser.email = email

    return newUser
  }

}
