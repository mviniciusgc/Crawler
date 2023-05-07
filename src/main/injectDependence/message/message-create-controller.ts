import {  MessageCreateController} from '@/presentation/controllers'
import { CreateMessageRepository} from '@/infra/repositories/message'
import { Controller } from '@/presentation/contracts'

export const makeMessageCreateController = (): Controller => {
  const createMessageRepository = new CreateMessageRepository()
  return new MessageCreateController(createMessageRepository)
}
