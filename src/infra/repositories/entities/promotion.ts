import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  OneToMany
} from 'typeorm'

import { Message } from './message'

@Entity('promotion')
export class Promotion {
  @PrimaryGeneratedColumn('uuid')
    promotion_id!: string
  
  @Column()
    title: string
  
  @Column()
    url: string

  @Column()
  url_img: string
  
  @Column('text')
    description: string
  
  @Column()
    price: string
  
  @OneToMany(() => Message, (message) => message.promotion)
  message: Message[]

  @CreateDateColumn({ name: 'created_at' })
    created_at: Date

  @UpdateDateColumn({ name: 'updated_at' })
    updated_at: Date
}
