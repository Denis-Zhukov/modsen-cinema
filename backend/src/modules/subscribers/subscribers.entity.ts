import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'subscribers' })
export class SubscribersEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    email: string;
}
