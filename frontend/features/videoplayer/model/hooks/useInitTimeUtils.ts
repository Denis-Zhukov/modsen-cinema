import { useCallback, useEffect, useState } from 'react';

import { useVideoPlayerContext } from '@/features/videoplayer/ui/VideoPlayer/context';

export const useInitTimeUtils = () => {
    const { state: { videoRef } } = useVideoPlayerContext();
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [bufferedTime, setBufferedTime] = useState(0);

    const seekTo = useCallback((time: number) => {
        if (!videoRef.current) return;
        videoRef.current.currentTime = time;
        setCurrentTime(time);
    }, [videoRef]);

    useEffect(() => {
        const video = videoRef.current;

        if (!video) {
            return () => {
            };
        }

        const handleTimeUpdate = () => setCurrentTime(video.currentTime);
        video.addEventListener('timeupdate', handleTimeUpdate);

        const handleProgress = () => {
            if (video.buffered.length > 0) {
                const bufferedEnd = video.buffered.end(video.buffered.length - 1);
                setBufferedTime(bufferedEnd);
            }
        };
        video.addEventListener('timeupdate', handleProgress);

        const handleLoadedMetadata = () => setDuration(video.duration);

        if (video.duration) {
            handleLoadedMetadata();
        } else {
            video.addEventListener('loadedmetadata', handleLoadedMetadata);
        }

        return () => {
            video.removeEventListener('timeupdate', handleTimeUpdate);
            video.removeEventListener('timeupdate', handleProgress);
            video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        };
    }, [setCurrentTime, videoRef]);

    return {
        currentTime, bufferedTime, duration, seekTo,
    };
};
