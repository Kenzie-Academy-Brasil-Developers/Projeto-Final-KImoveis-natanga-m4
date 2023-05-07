import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from './realEstate.entity';



@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'varchar', length: 45, unique: true })
    name: string
}