import { adaptRoute } from '@/main/adapter'
import { makeUserCreateController } from '@/main/injectDependence/user'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/user', adaptRoute(makeUserCreateController()))
}
