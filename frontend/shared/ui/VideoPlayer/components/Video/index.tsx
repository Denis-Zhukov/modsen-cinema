import React, { forwardRef } from 'react';

import { SET_PLAYING, useVideoPlayerContext } from '@/shared/ui/VideoPlayer/context';
import { useToggleFullscreen } from '@/shared/ui/VideoPlayer/hooks/useToggleFullscreen';
import { useTogglePlaying } from '@/shared/ui/VideoPlayer/hooks/useTogglePlaying';

type Props = {
    src: string,
};

const ForwardVideo = forwardRef<HTMLVideoElement, Props>(({
    src,
}, ref) => {
    const {
        dispatch,
        state: { isPlaying, volume },
    } = useVideoPlayerContext();
    const handleClick = useTogglePlaying();
    const handleDoubleClick = useToggleFullscreen();

    const handleEnded = () => dispatch({
        type: SET_PLAYING,
        payload: false,
    });

    return (
        <video
            onClick={handleClick}
            onDoubleClick={handleDoubleClick}
            onEnded={handleEnded}
            ref={ref}
            controls={false}
            autoPlay={isPlaying}
        >
            <source src={src}/>
        </video>
    );
});

export const Video = React.memo(ForwardVideo);
