import "reflect-metadata"
import { DataSource } from 'typeorm'
import User from '../../entities/user'
import {UserTable1682515358397} from './migrations/1682515358397-UserTable'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123456',
  database: 'postgresdb',
  entities: [User],
  migrations: [UserTable1682515358397],
  subscribers:[],
  synchronize: false,
  logging: true,
})

