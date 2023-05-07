import { adaptRoute } from '@/main/adapter'
import { makePromotionCreateController, getPromotionController } from '@/main/injectDependence/promotion'

import { Router } from 'express'

export default (router: Router): void => {
  router.post('/promotion', adaptRoute(makePromotionCreateController()))
  router.get('/promotion/:id', adaptRoute(getPromotionController()))
}
