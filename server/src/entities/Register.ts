import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './Users';

@Entity('REGISTER')
export class Register {
  @PrimaryGeneratedColumn()
  registerId: number;

  @Column({ nullable: true })
  projectName?: string;

  @Column({ nullable: true })
  description?: string;

  @Column('simple-array', { nullable: true })
  categoryId?: string[];

  @CreateDateColumn({
    default: () => 'CURRENT_TIMESTAMP',
    nullable: true,
  })
  createdAt?: string;

  @ManyToOne(() => User, (user) => user.register)
  @JoinColumn({ name: 'uid', referencedColumnName: 'uid' })
  user: User;
}
