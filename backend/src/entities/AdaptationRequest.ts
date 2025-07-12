import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { Order } from './Order';
import { User } from './User';

export type AdaptationStatus = 'pending' | 'in_progress' | 'completed' | 'approved';

@Entity()
export class AdaptationRequest extends BaseEntity {
  @ManyToOne(() => Order)
  order: Order;

  @ManyToOne(() => User)
  architect: User;

  @Column({ type: 'enum', enum: ['pending', 'in_progress', 'completed', 'approved'], default: 'pending' })
  status: AdaptationStatus;

  @Column({ nullable: true })
  adjustedPlanUrl: string;
}
