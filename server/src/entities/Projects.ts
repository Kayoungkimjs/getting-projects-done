import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project')
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer')
  categoryId: number;

  @Column('text')
  categoryKr: string;

  @Column('text')
  categoryEn: string;

  @Column('text')
  endpoint: string;

  @Column('text')
  testType: string;

  @Column('text')
  testName: string;

  @Column('text')
  criteria: string;

  @Column('text')
  notes: string;

  @Column('integer')
  result: number;

  @Column('integer')
  status: number;

  @Column('integer')
  priority: number;
}
