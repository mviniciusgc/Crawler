import  { Message }  from '../entities/message'
import { AppDataSource } from '../database/typeorm/config'
import { IMessageCreateRepository } from '@/infra/usecases'

export class CreateMessageRepository implements IMessageCreateRepository {
  async create (params: IMessageCreateRepository.Params): Promise<IMessageCreateRepository.Result> {

    const userRepository = AppDataSource.getRepository(Message)
    const newPromotion = await this.adapterRequest(params, new Message())
    const promotionResponse = await userRepository.manager.save(newPromotion)

    delete promotionResponse.created_at
    delete promotionResponse.updated_at

    return promotionResponse
  }

  async adapterRequest ({description,promotion_id, user_id}: IMessageCreateRepository.Params, newMessage: Message): Promise<Message> {
    
    newMessage.description = description
    newMessage.promotion_id = promotion_id
    newMessage.user_id = user_id

    return newMessage
  }

}
