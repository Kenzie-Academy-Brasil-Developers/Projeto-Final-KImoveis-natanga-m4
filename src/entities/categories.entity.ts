import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { RealEstate } from './realEstate.entity';



@Entity('categories')
export class Category {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'varchar', length: 45, unique: true })
    name: string
}