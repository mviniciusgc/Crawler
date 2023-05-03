import {UserCreateRepository,PromotionCreateRepository} from '@/infra/usecases'

export class PromotionCreateSpy implements PromotionCreateRepository {
  params: PromotionCreateRepository.Params
  
  result = {
    url: 'https://www.fake.com.br/cadeira-de-escritorio-giratoria-preta-fortt/',
    url_img: 'https://www.fake.com.br/image/',
    title: 'Celular',
    price: 'R$ 172,99',
    description: 'Sansung galaxy'
  }

  async create (params: PromotionCreateRepository.Params): Promise<PromotionCreateRepository.Result> {
    this.params = params
    return this.result
  }
}
export class UserCreateSpy implements UserCreateRepository {
  params: UserCreateRepository.Params
  
  result = {
    name: "Name teste",
    nick_name: "nick test",
    email: "email@test.com"
  }

  async create (params: UserCreateRepository.Params): Promise<UserCreateRepository.Result> {
    this.params = params
    return this.result
  }
}
