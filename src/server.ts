import 'module-alias/register'

import app from '@/main/config/app'
import { env } from '@/main/config/env'
import { AppDataSource } from '@/infra/repositories/database/typeorm/config'

AppDataSource.initialize()
.then(() => {
    app.listen(env.port, env.host, () => console.log(`Server running at port ${env.port}`))
  })
.catch((error) => console.log(error))


