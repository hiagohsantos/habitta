import { Entity, Column } from 'typeorm';
import { BaseEntity } from './BaseEntity';

export type UserRole = 'client' | 'architect' | 'banker' | 'admin';

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: ['client', 'architect', 'banker', 'admin'] })
  role: UserRole;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  creaCau: string;
}
