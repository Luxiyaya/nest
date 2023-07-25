import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm'
import { Photo } from './../../photo/photo.entity';


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

  // @OneToOne(type => Photo, photo => photo.user)
  // photos: Photo[]
}