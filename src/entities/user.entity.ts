import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";



@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 45 })
    name: string;

    @Column({ type: 'varchar', length: 45, unique: true })
    email: string

    @Column({ default: false })
    admin: boolean;

    @Column({ type: 'varchar', length: 120 })
    password: boolean;

    @CreateDateColumn()
    createAt: string | Date;

    @UpdateDateColumn()
    updateAt: string | Date ;

    @DeleteDateColumn()
    deletedAt: string | Date | null | undefined;
}