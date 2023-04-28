export interface UserCreateRepository {
  create: (params: UserCreateRepository.Params) => Promise<UserCreateRepository.Result>
}
export namespace UserCreateRepository {
  export type Params = {
    name: string
    nick_name: string
    email: string
  }

  export type Result = {
    id?: string
    name: string
    nick_name: string
    email: string
    created_at?:Date
  }
}
