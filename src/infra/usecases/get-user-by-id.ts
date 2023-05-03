export interface IGetUserByIDRepository {
  getById: (params: IGetUserByIDRepository.Params) => Promise<IGetUserByIDRepository.Result>
}
export namespace IGetUserByIDRepository {
  export type Params = {
    id: string
  }

  export type Result = {
    id?: string
    name: string
    nick_name: string
    email: string
    created_at?:Date
    updated_at?:Date
  }
}
