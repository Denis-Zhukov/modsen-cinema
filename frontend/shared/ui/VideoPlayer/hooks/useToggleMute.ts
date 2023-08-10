import { useCallback } from 'react';

import { useVideoPlayerContext } from '@/shared/ui/VideoPlayer/context';

export const useToggleMute = (setValue?: (volume: number) => void) => {
    const { state: { videoRef } } = useVideoPlayerContext();

    return useCallback(() => {
        const video = videoRef.current;
        if (!video) return;
        if (video.volume > 0) {
            videoRef.current!.volume = 0;
            setValue?.(0);
        } else {
            videoRef.current!.volume = 1;
            setValue?.(1);
        }
    }, [videoRef, setValue]);
};
