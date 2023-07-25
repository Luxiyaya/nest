import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'


// 标记为实体类
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  firstName: string

  @Column()
  lastName: string

  @Column({ default: true })
  isActive: boolean
}