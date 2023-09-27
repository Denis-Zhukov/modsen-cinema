import { useCallback } from 'react';

import { TOGGLE_PLAYING, useVideoPlayerContext } from '@/features/videoplayer/ui/VideoPlayer/context';

export const useTogglePlaying = () => {
    const { state: { videoRef }, dispatch } = useVideoPlayerContext();

    return useCallback(() => {
        if (videoRef.current) {
            if (videoRef.current.paused) {
                videoRef.current.play();
            } else {
                videoRef.current.pause();
            }

            dispatch({ type: TOGGLE_PLAYING });
        }
    }, [videoRef, dispatch]);
};
