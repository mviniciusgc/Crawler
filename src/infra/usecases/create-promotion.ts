export interface IPromotionCreateRepository {
  create: (params: IPromotionCreateRepository.Params) => Promise<IPromotionCreateRepository.Result>
}
export namespace IPromotionCreateRepository {
  export type Params = {
    url: string
    url_img: string
    title: string
    price: string
    description: string
  }

  export type Result = {
    url: string
    url_img: string
    title: string
    price: string
    description: string
  }
}
