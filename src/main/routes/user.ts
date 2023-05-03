import { adaptRoute } from '@/main/adapter'
import { createUserController,getUserController } from '@/main/injectDependence/user'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/user', adaptRoute(createUserController()))
  router.get('/user/:id', adaptRoute(getUserController()))
}
