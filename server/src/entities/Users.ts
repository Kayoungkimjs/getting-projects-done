import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Register } from './Register';

@Entity('USER')
export class User {
  @PrimaryGeneratedColumn()
  uid: number;

  @Column({ unique: true })
  userId: string;

  @Column()
  password: string;

  @Column({ nullable: true })
  email?: string;

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

  @OneToMany(() => Register, (register) => register.user)
  register: Register[];
}
