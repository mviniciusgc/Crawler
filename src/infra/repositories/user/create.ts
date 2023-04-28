import  User  from '../entities/user'
import { AppDataSource } from '../database/typeorm/config'
import {UserCreateRepository} from '@/infra/usecases'

export class CreateUserRepository implements UserCreateRepository {
  async create (params: UserCreateRepository.Params): Promise<UserCreateRepository.Result> {
    const userRepository = AppDataSource.getRepository(User)
    const newUser = await this.adapterRequest(params, new User())
    const userResponse = await userRepository.manager.save(newUser)
 
    console.log(userResponse)
    return userResponse
  }

  async adapterRequest ({name,nick_name,email}: UserCreateRepository.Params, newUser: User): Promise<User> {
    newUser.name = name
    newUser.nick_name = nick_name
    newUser.email = email

    return newUser
  }
  async adapterResponse ({name,nick_name,email}: UserCreateRepository.Params, newUser: User): Promise<User> {
    newUser.name = name
    newUser.nick_name = nick_name
    newUser.email = email

    return newUser
  }
}
