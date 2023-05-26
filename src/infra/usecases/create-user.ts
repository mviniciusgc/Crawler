export interface IUserCreateRepository {
  create: (params: IUserCreateRepository.Params) => Promise<IUserCreateRepository.Result>
}
export namespace IUserCreateRepository {
  export type Params = {
    name: string
    nick_name: string
    email: string
    password: string
  }

  export type Result = {
    id?: string
    name: string
    nick_name: string
    email: string
    created_at?:Date
  }
}
