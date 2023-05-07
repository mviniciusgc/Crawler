import  { User }  from '../entities/user'
import { AppDataSource } from '../database/typeorm/config'
import {IGetUserByIDRepository} from '@/infra/usecases'

export class GetUserByIDRepository implements IGetUserByIDRepository {
  async getById(params: IGetUserByIDRepository.Params): Promise<IGetUserByIDRepository.Result> {
    
    const userRepository = AppDataSource.getRepository(User)
    const userResponse = await userRepository.findOneBy({user_id: params.id})
    console.log(userResponse)

    return userResponse
  }

}
