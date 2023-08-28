type Seat = { id: number, available: true };

export interface SeatsByScheduleResponse {
    seats: Record<string, Seat[]>
    price: number
}
