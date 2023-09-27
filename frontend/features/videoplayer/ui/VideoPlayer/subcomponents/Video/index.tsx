import React, { forwardRef } from 'react';

import { useToggleFullscreen } from '@/features/videoplayer/model/hooks/useToggleFullscreen';
import { useTogglePlaying } from '@/features/videoplayer/model/hooks/useTogglePlaying';

import { SET_PLAYING, useVideoPlayerContext } from '../../context';

type Props = {
    src: string,
};

const ForwardVideo = forwardRef<HTMLVideoElement, Props>(({
    src,
}, ref) => {
    const {
        dispatch,
        state: { isPlaying },
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
