import { UserCreateController } from './index'
import { UserCreateSpy } from '@/presentation/mocks'
import { badRequest } from '@/presentation/help'
import { MissingParamError } from '@/presentation/errors'
import {UserCreate} from '@/infra/usecases'

const mockRequest = (): UserCreateController.Request => {
  return {
    name: 'Name Valid',
    nick_name: "nick_name valid",
    email: 'Email valid'
  }
}
export const throwError = (): never => {
  throw new Error()
}

describe('UserCreateController', () => {
  test('Should return sucess', async () => {
    const userCreateSpy = new UserCreateSpy()
    const sut = new UserCreateController(userCreateSpy)
    const request = mockRequest()
    await sut.handle(request)
    expect(userCreateSpy.params).toEqual({
      name: request.name,
      nick_name: request.nick_name,
      email: request.email
    })
  })
  test('Should return 400 if name not exist', async () => {
    const userCreateSpy = new UserCreateSpy()
    const sut = new UserCreateController(userCreateSpy)
    const request = mockRequest()
    const expectError = new MissingParamError('name')
    const httpRequest = await sut.handle({ ...request, name: '' })
    expect(httpRequest).toEqual(badRequest(expectError))
  })
  test('Should return 400 if nick_name not exist', async () => {
    const userCreateSpy = new UserCreateSpy()
    const sut = new UserCreateController(userCreateSpy)
    const request = mockRequest()
    const expectError = new MissingParamError('nick_name')
    const httpRequest = await sut.handle({ ...request, nick_name: '' })
    expect(httpRequest).toEqual(badRequest(expectError))
  })
  test('Should return 400 if email not exist', async () => {
    const userCreateSpy = new UserCreateSpy()
    const sut = new UserCreateController(userCreateSpy)
    const request = mockRequest()
    const expectError = new MissingParamError('email')
    const httpRequest = await sut.handle({ ...request, email: '' })
    expect(httpRequest).toEqual(badRequest(expectError))
  })
  test('Should return 500 if AddSurvey throws', async () => {
    const userCreateSpy = new UserCreateSpy()
    const sut = new UserCreateController(userCreateSpy)
    jest.spyOn(userCreateSpy, 'create').mockImplementationOnce(throwError)
    const httpResponse = await sut.handle(mockRequest())
    expect(httpResponse.statusCode).toEqual(500)
  })
})
