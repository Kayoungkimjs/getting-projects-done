import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('PROJECT')
export class Project {
  @PrimaryGeneratedColumn()
  projectId: number;

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

  @Column({ nullable: true })
  criteria: string;
}
