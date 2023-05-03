import { PromotionCreateController } from '@/presentation/controllers/index'
import { PromotionCreateSpy } from '@/presentation/mocks'
import { MissingParamError } from '@/presentation/errors'
import { badRequest } from '@/presentation/help'

const mockRequest = (): PromotionCreateController.Request => {
  return {
    url: 'https://www.fake.com.br/cadeira-de-escritorio-giratoria-preta-fortt/',
    description:"teste",
    price: "1.079,00",
    title: "teste",
    url_img:"teste"
  }
}

export const throwError = (): never => {
  throw new Error()
}

describe('PromotionCreateController', () => {
  test('Should return sucess', async () => {
    const promotionCreateSpy = new PromotionCreateSpy()
    const sut = new PromotionCreateController(promotionCreateSpy)
    const request = mockRequest()
    await sut.handle(request)
    expect(promotionCreateSpy.params).toEqual({
      url: request.url,
      url_img: request.url_img,
      title: request.title,
      price: request.price,
      description: request.description
    })
  })

  test('Should return 400 if url not exist', async () => {
    const promotionCreateSpy = new PromotionCreateSpy()
    const sut = new PromotionCreateController(promotionCreateSpy)
    const request = mockRequest()
    const expectError = new MissingParamError('url')
    const httpRequest = await sut.handle({ ...request, url: '' })
    expect(httpRequest).toEqual(badRequest(expectError))
  })
  test('Should return 400 if url_img not exist', async () => {
    const promotionCreateSpy = new PromotionCreateSpy()
    const sut = new PromotionCreateController(promotionCreateSpy)
    const request = mockRequest()
    const expectError = new MissingParamError('url_img')
    const httpRequest = await sut.handle({ ...request, url_img: '' })
    expect(httpRequest).toEqual(badRequest(expectError))
  })
  test('Should return 400 if title not exist', async () => {
    const promotionCreateSpy = new PromotionCreateSpy()
    const sut = new PromotionCreateController(promotionCreateSpy)
    const request = mockRequest()
    const expectError = new MissingParamError('title')
    const httpRequest = await sut.handle({ ...request, title: '' })
    expect(httpRequest).toEqual(badRequest(expectError))
  })
  test('Should return 400 if price not exist', async () => {
    const promotionCreateSpy = new PromotionCreateSpy()
    const sut = new PromotionCreateController(promotionCreateSpy)
    const request = mockRequest()
    const expectError = new MissingParamError('price')
    const httpRequest = await sut.handle({ ...request, price: '' })
    expect(httpRequest).toEqual(badRequest(expectError))
  })
  test('Should return 400 if description not exist', async () => {
    const promotionCreateSpy = new PromotionCreateSpy()
    const sut = new PromotionCreateController(promotionCreateSpy)
    const request = mockRequest()
    const expectError = new MissingParamError('description')
    const httpRequest = await sut.handle({ ...request, description: '' })
    expect(httpRequest).toEqual(badRequest(expectError))
  })
  test('Should return 500 if AddSurvey throws', async () => {
    const promotionCreateSpy = new PromotionCreateSpy()
    const sut = new PromotionCreateController(promotionCreateSpy)
    jest.spyOn(promotionCreateSpy, 'create').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse.statusCode).toEqual(500)
  })
})
