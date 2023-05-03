import "reflect-metadata"
import { DataSource } from 'typeorm'
import {User,Promotion} from '../../entities'
import {UserTable1682515358397, CreatePromotionTable1682780793348} from './migrations'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'postgresdb',
  entities: [User,Promotion],
  migrations: [UserTable1682515358397,CreatePromotionTable1682780793348],
  subscribers:[],
  synchronize: false,
  logging: true,
})

