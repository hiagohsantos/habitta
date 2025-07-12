import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from './User';

export type LeadStatus = 'pending' | 'approved' | 'rejected';

@Entity()
export class Lead extends BaseEntity {
  @Column()
  name: string;

  @Column('decimal')
  income: number;

  @Column()
  location: string;

  @Column()
  financingType: string;

  @Column({ type: 'enum', enum: ['pending', 'approved', 'rejected'], default: 'pending' })
  status: LeadStatus;

  @ManyToOne(() => User)
  client: User;

  @ManyToOne(() => User)
  banker: User;

  @Column({ type: 'json', nullable: true })
  documents: Record<string, string>;
}
