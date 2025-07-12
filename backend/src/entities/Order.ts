import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from './User';
import { Cart } from './Cart';

export type OrderStatus = 'pending' | 'paid' | 'completed';
export type PaymentMethod = 'pix' | 'boleto' | 'card';

@Entity()
export class Order extends BaseEntity {
  @ManyToOne(() => User)
  client: User;

  @ManyToOne(() => Cart)
  cart: Cart;

  @Column({ type: 'enum', enum: ['pending', 'paid', 'completed'], default: 'pending' })
  status: OrderStatus;

  @Column({ nullable: true })
  contractUrl: string;

  @Column({ nullable: true })
  invoiceUrl: string;

  @Column({ type: 'enum', enum: ['pix', 'boleto', 'card'], nullable: true })
  paymentMethod: PaymentMethod;
}
