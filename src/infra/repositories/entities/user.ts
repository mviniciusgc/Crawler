import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from 'typeorm';
import { Message } from './message'

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string

  @Column()
  name: string

  @Column()
  nick_name: string

  @Column()
  email: string

  @OneToMany(() => Message, (message) => message.promotion)
  message: Message[]

  @CreateDateColumn({ select: false })
  created_at: Date;

  @UpdateDateColumn({ select: false })
  updated_at: Date;
}
