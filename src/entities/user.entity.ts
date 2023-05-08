import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';


@Entity('users')
export class User {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 45 })
    name: string;

    @Column({ type: 'varchar', length: 45, unique: true })
    email: string

    @Column({ default: false })
    admin: boolean;

    @Column({ type: 'varchar', length: 120 })
    password: string;

    @CreateDateColumn({ type: 'date' })
    createdAt: string | Date;

    @UpdateDateColumn({ type: 'date' })
    updatedAt: string | Date;

    @DeleteDateColumn({ type: 'date', nullable: true })
    deletedAt: string | Date | null | undefined;
}