import { Entity, PrimaryGeneratedColumn, Column, } from "typeorm";
import { ForeignKeyMetadata } from "typeorm/metadata/ForeignKeyMetadata";


@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user: number;

  @Column({
    length: 100
  })
  name: string;

  @Column("text")
  description: string;

  @Column()
  filename: string;

  @Column("double")
  views: number;

  @Column()
  isPublished: boolean;

}
