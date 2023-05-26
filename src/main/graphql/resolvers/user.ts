import { adaptResolver } from '../adapter/adaptResolver'
import { createUserController,getUserController } from '@/main/injectDependence/user'

export default {
  Query: {
    user: (_,__, contextValue): Promise<any> => adaptResolver(getUserController())
  }

}