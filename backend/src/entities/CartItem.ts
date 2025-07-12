import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Cart } from './Cart';
import { ArchitecturalPlan } from './ArchitecturalPlan';

export type CartItemType = 'architectural' | 'terrain' | 'structural' | 'approval';

@Entity()
export class CartItem extends BaseEntity {
  @ManyToOne(() => Cart, (cart) => cart.items)
  cart: Cart;

  @ManyToOne(() => ArchitecturalPlan)
  plan: ArchitecturalPlan;

  @Column({ type: 'enum', enum: ['architectural', 'terrain', 'structural', 'approval'] })
  type: CartItemType;

  @Column('decimal')
  price: number;
}
