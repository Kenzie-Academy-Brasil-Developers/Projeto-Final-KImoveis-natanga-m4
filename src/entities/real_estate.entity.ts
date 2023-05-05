import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Address } from "./address.entity";
import { Category } from "./categories.entity";



@Entity('real_estate')
export class RealEstate {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: false })
    sold: boolean;

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    value: number;

    @Column({ type: 'integer' })
    size: number;

    @CreateDateColumn()
    createAt: string | Date;

    @UpdateDateColumn()
    updateAt: string | Date ;

    @OneToMany(() => Address, (address) => address.id)
    AddressId: number;

    @ManyToOne(() => Category, (category) => category.id)
    categoryId: number;
}