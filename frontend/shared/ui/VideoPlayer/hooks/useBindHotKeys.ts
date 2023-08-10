import { useEffect } from 'react';

import { useVideoPlayerContext } from '@/shared/ui/VideoPlayer/context';
import { useToggleFullscreen } from '@/shared/ui/VideoPlayer/hooks/useToggleFullscreen';
import { useToggleMute } from '@/shared/ui/VideoPlayer/hooks/useToggleMute';
import { useTogglePlaying } from '@/shared/ui/VideoPlayer/hooks/useTogglePlaying';

export const useBindHotKeys = () => {
    const { state: { videoRef } } = useVideoPlayerContext();
    const togglePlay = useTogglePlaying();
    const toggleMute = useToggleMute();
    const toggleFullscreen = useToggleFullscreen();
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.code) {
                case 'Space':
                    togglePlay();
                    break;
                case 'KeyM':
                    toggleMute();
                    break;
                case 'KeyF':
                    toggleFullscreen();
                    break;
                case 'ArrowRight':
                    if (!videoRef.current) return;
                    videoRef.current.currentTime += 10;
                    break;
                case 'ArrowLeft':
                    if (!videoRef.current) return;
                    videoRef.current.currentTime -= 10;
                    break;
                default:
                    break;
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [toggleFullscreen, toggleMute, togglePlay, videoRef]);
};
