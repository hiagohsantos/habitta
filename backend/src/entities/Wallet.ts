import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from './User';

@Entity()
export class Wallet extends BaseEntity {
  @ManyToOne(() => User)
  architect: User;

  @Column('decimal', { default: 0 })
  balance: number;
}
