import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { SeatsEntity } from './seats.entity';
import { SetLayoutDto } from './dto/set-layout.dto';
import { BookingsService } from '../bookings/bookings.service';

@Injectable()
export class SeatsService {
    public constructor(
        @InjectRepository(SeatsEntity)
        private readonly seatsRepository: Repository<SeatsEntity>,
        private readonly dataSource: DataSource,
        private readonly bookingsService: BookingsService,
    ) {}

    private transformPlainSeatsToObject(
        seats: Pick<SeatsEntity, 'seatNumber' | 'rowNumber'>[],
    ) {
        seats.sort((a, b) => {
            if (a.rowNumber === b.rowNumber) return a.seatNumber - b.seatNumber;
            return a.rowNumber - b.rowNumber;
        });

        const rowNumberToObject = {};

        for (const obj of seats) {
            if (!rowNumberToObject[obj.rowNumber])
                rowNumberToObject[obj.rowNumber] = [];
            rowNumberToObject[obj.rowNumber].push(obj);
        }

        return rowNumberToObject;
    }

    getAll() {
        return this.seatsRepository.find();
    }

    getById(id: number) {
        return this.seatsRepository.findOne({ where: { id } });
    }

    async setLayout({ seats }: SetLayoutDto) {
        const values = seats.flatMap((seat) => ({
            rowNumber: seat.row,
            seatNumber: seat.seat,
        }));

        const queryRunner = this.dataSource.createQueryRunner();
        await queryRunner.connect();
        await queryRunner.startTransaction();

        try {
            await this.seatsRepository.delete({});
            await this.seatsRepository.query(
                `ALTER SEQUENCE seats_id_seq RESTART WITH 1`,
            );
            return await this.seatsRepository.insert(values);
        } catch (e) {
            await queryRunner.rollbackTransaction();
            throw e;
        } finally {
            await queryRunner.release();
        }
    }

    async getSeatsBySchedule(scheduleId: number) {
        const seats = await this.getAll();
        const bookings = await this.bookingsService.getByScheduleId(scheduleId);

        const availableSeats = seats.map((seat) => ({
            ...seat,
            available: !bookings.some(({ seatId }) => seatId === seat.id),
        }));

        return this.transformPlainSeatsToObject(availableSeats);
    }
}
