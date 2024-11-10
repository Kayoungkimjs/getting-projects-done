import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Register } from './Register';
import { UserProject } from './UserProject';

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

  @OneToMany(() => UserProject, (userProject) => userProject.user)
  userProject: UserProject[];
}
