import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { RealEstate } from './realEstate.entity';
import { User } from './user.entity';



@Entity('schedules')
export class Schedule {
    @PrimaryGeneratedColumn('increment')
    id: number

    @Column({ type: 'date', default: () => 'CURRENT_DATE' })
    date: Date;

    @Column({ type: 'time', default: () => 'CURRENT_TIMESTAMP' })
    hour: Date;

    @ManyToOne(() => User, (users) => users.id)
    user: User;

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.id)
    realEstate: RealEstate;
}