//import { PromotionCreate } from '@/domain/usecases'
import {UserCreateRepository} from '@/infra/usecases'

// export class PromotionCreateSpy implements PromotionCreate {
//   params: PromotionCreate.Params
  
//   result = {
//     url: 'https://www.fake.com.br/cadeira-de-escritorio-giratoria-preta-fortt/',
//     img: 'https://www.fake.com.br/image/',
//     title: 'Celular',
//     price: 'R$ 172,99',
//     description: 'Sansung galaxy'
//   }

//   async create (params: PromotionCreate.Params): Promise<PromotionCreate.Result> {
//     this.params = params
//     return this.result
//   }
// }
export class UserCreateSpy implements UserCreateRepository {
  params: UserCreateRepository.Params
  
  result = {
    success: true
  }

  async create (params: UserCreateRepository.Params): Promise<UserCreateRepository.Result> {
    this.params = params
    return this.result
  }
}
