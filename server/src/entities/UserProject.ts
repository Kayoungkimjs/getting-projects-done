import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './Users';

@Entity('USER_PROJECT')
export class UserProject {
  @PrimaryGeneratedColumn()
  userProjectId: number;

  @Column({ nullable: true })
  notes: string;

  @Column({ nullable: true })
  result: number;

  @Column({ nullable: true })
  status: number;

  @Column({ nullable: true })
  priority: number;

  @CreateDateColumn({
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  createdAt?: string;

  @UpdateDateColumn({
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  updatedAt?: string;

  @ManyToOne(() => User, (user) => user.register)
  @JoinColumn({ name: 'uid', referencedColumnName: 'uid' })
  user: User;
}
