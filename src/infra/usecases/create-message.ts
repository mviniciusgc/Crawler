export interface IMessageCreateRepository {
  create: (params: IMessageCreateRepository.Params) => Promise<IMessageCreateRepository.Result>
}
export namespace IMessageCreateRepository {
  export type Params = {
    promotion_id: string
    user_id: string
    description: string
  }

  export type Result = {
    message_id: string
    promotion_id: string
    description: string
  }
}
