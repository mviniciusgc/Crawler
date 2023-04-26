import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinColumn,
} from 'typeorm';

@Entity('user')
class User {
  @PrimaryGeneratedColumn('uuid')
  user_id: string

  @Column()
  name: string

  @Column()
  nick_name: string

  // @OneToMany(() => OrdersProducts, orderProduct => orderProduct.product)
  // @JoinColumn()
  // order_products: OrdersProducts[];

  @CreateDateColumn({ select: false })
  created_at: Date;

  @UpdateDateColumn({ select: false })
  updated_at: Date;
}

export default User;