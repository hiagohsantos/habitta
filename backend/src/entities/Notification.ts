import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from './User';

export type NotificationType = 'sale' | 'adaptation' | 'status_update';

@Entity()
export class Notification extends BaseEntity {
  @ManyToOne(() => User)
  recipient: User;

  @Column()
  message: string;

  @Column({ type: 'enum', enum: ['sale', 'adaptation', 'status_update'] })
  type: NotificationType;

  @Column({ default: false })
  read: boolean;
}
