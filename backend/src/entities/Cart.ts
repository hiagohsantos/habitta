import { Entity, Column, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from './User';
import { CartItem } from './CartItem';

export type CartStatus = 'active' | 'completed';

@Entity()
export class Cart extends BaseEntity {
  @ManyToOne(() => User)
  client: User;

  @OneToMany(() => CartItem, (item) => item.cart)
  items: CartItem[];

  @Column('decimal')
  total: number;

  @Column('decimal')
  approvedBudget: number;

  @Column({ type: 'enum', enum: ['active', 'completed'], default: 'active' })
  status: CartStatus;
}
