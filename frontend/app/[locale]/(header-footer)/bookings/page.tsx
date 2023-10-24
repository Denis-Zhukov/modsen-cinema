import { Suspense } from 'react';

import { Bookings } from '@/app-pages/bookings';

import Loading from './loading';

const BookingPage = () => <Suspense fallback={<Loading/>}><Bookings/></Suspense>;

export default BookingPage;

export const metadata = {
    title: 'Bookings - Monema',
    description: '...',
};
