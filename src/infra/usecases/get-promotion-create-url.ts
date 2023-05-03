export interface IGetPromotionURL {
  get: (params: IGetPromotionURL.Params) => Promise<IGetPromotionURL.Result>
}
export namespace IGetPromotionURL {
  export type Params = {
    url: string
  }

  export type Result = {
    exist: boolean
  }
}
