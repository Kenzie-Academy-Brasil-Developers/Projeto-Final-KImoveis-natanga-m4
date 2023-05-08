import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Address } from './address.entity';
import { Category } from './categories.entity';

@Entity('real_estate')
export class RealEstate {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'boolean', default: false })
    sold: boolean;

    @Column({ type: 'decimal', precision: 12, scale: 2, default: 0 })
    value: string | number;

    @Column({ type: 'integer' })
    size: number;

    @CreateDateColumn({ type: "date" })
    createAt: string;

    @UpdateDateColumn({ type: "date" })
    updateAt: string;

    @OneToOne(() => Address)
    @JoinColumn()
    address: Address;

    @ManyToOne(() => Category, (category) => category.realEstate)
    category: Category;
}