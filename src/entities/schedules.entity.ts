import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { RealEstate } from "./real_estate.entity";
import { User } from "./user.entity";



@Entity('schedules')
export class Schedule {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ type: 'date', default: () => 'CURRENT_DATE' })
    date: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    hour: Date;

    @ManyToOne(() => User, (users) => users.id)
    userId: User;

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.id)
    realEstateId: RealEstate;
}