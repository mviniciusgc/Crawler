import { adaptRoute } from '@/main/adapter'
import { makeMessageCreateController } from '@/main/injectDependence/message'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/message', adaptRoute(makeMessageCreateController()))
}
