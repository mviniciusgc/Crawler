export interface IGetPromotionByIDRepository {
  getById: (params: IGetPromotionByIDRepository.Params) => Promise<IGetPromotionByIDRepository.Result>
}
export namespace IGetPromotionByIDRepository {
  export type Params = {
    promotion_id: string
  }

  export type Result = {
    id?: string
    url: string
    url_img: string
    title: string
    price: string
    description: string
    created_at?:Date
    updated_at?:Date
  }
}
