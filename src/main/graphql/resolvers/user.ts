import { adaptResolver } from '../adapter/adaptResolver'
import { createUserController } from '@/main/injectDependence/user'

export default {
  Query: {
    user: (): Promise<any> => adaptResolver(createUserController())
  }
}