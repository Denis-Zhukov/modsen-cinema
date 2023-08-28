export type GetMyBookingsResponse = {
    ticket: string
    scheduleId: number
    count: number
    dateAndTime: string
    film: { name: string, preview: string }
    seats: { rowNumber: number, seatNumber: number }
    paid: number
    rating: number
}[];
