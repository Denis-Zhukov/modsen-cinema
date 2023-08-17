import { Urls } from '@/shared/api/Urls';
import { VideoPlayer } from '@/shared/ui/VideoPlayer';

const Booking = () => (
    <div>
        <VideoPlayer
            src={Urls.MAIN_TRAILER}
            preview={Urls.MAIN_PREVIEW}
        />
    </div>
);
export default Booking;

export const metadata = {
    title: 'Booking - Monema',
    description: '...',
};
