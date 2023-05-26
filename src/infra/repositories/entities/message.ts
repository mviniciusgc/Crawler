import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne
} from 'typeorm'
import { Promotion } from './promotion'
import { User } from './user'

@Entity('message')
export class Message {
  @PrimaryGeneratedColumn('uuid')
  message_id!: string

  @Column('uuid')
  promotion_id: string

  @Column('uuid')
  user_id: string
 
  @Column('text')
  description: string
  
  // @ManyToOne(() => User,(user) => user.message)
  // @JoinColumn({name: 'user_id'})
  // user?: User

  @ManyToOne(() => Promotion,(promotion) => promotion.message)
  @JoinColumn({name: 'promotion_id'})
  promotion?: Promotion

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date

  @UpdateDateColumn({ name: 'updated_at' })
  updated_at: Date

}
