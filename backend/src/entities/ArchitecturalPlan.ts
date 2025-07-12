import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from './BaseEntity';
import { User } from './User';

@Entity()
export class ArchitecturalPlan extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column('decimal')
  price: number;

  @ManyToOne(() => User)
  architect: User;

  @Column({ nullable: true })
  fileUrl: string;
}
