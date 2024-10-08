import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer')
  categoryId: number;

  @Column({ nullable: true })
  categoryKr: string;

  @Column({ nullable: true })
  categoryEn: string;

  @Column({ nullable: true })
  endpoint: string;

  @Column({ nullable: true })
  testType: string;

  @Column({ nullable: true })
  testName: string;

  @Column('text')
  criteria: string;

  @Column({ nullable: true })
  notes: string;

  @Column({ nullable: true })
  result: number;

  @Column({ nullable: true })
  status: number;

  @Column({ nullable: true })
  priority: number;
}
