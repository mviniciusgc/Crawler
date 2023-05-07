import "reflect-metadata"
import { DataSource } from 'typeorm'
import path from "path"

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'crawler',
  entities: [path.join(__dirname, '../../entities/{.js,*.ts}')],
  migrations: [`${__dirname}/migrations/{.js,*.ts}`],
  subscribers:[],
  synchronize: false,
  logging: true,
})

