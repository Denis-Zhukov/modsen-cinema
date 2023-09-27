import { useCallback } from 'react';

import { TOGGLE_FULLSCREEN, useVideoPlayerContext } from '@/features/videoplayer/ui/VideoPlayer/context';

export const useToggleFullscreen = () => {
    const { state: { isFullscreen, videoContainerRef }, dispatch } = useVideoPlayerContext();

    return useCallback(() => {
        if (!videoContainerRef.current) return;

        if (!isFullscreen) {
            videoContainerRef.current.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
        dispatch({ type: TOGGLE_FULLSCREEN });
    }, [isFullscreen]);
};
