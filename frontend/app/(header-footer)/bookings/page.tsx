import { Urls } from '@/shared/api/Urls';
import { VideoPlayer } from '@/shared/ui/VideoPlayer';

const Booking = () => (
    <div>
        <VideoPlayer
            src={Urls.getMainTrailer()}
            preview="https://platinumlist.net/guide/wp-content/uploads/2023/03/IMG-worlds-of-adventure.webp"
        />
    </div>
);
export default Booking;

export const metadata = {
    title: 'Booking - Monema',
    description: '...',
};
