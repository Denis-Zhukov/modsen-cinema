import { useCallback } from 'react';

import {
    StyledPlayButton,
    StyledTriangle,
} from '@/shared/ui/VideoPlayer/components/CentralPlayButton/styled';
import { SET_PLAYING, useVideoPlayerContext } from '@/shared/ui/VideoPlayer/context';

export const CentralPlayButton = () => {
    const { state: { videoRef }, dispatch } = useVideoPlayerContext();

    const handleClick = useCallback(() => {
        videoRef.current?.play();
        dispatch({ type: SET_PLAYING, payload: true });
    }, [videoRef, dispatch]);

    return (
        <StyledPlayButton onClick={handleClick} type="button">
            <StyledTriangle/>
        </StyledPlayButton>
    );
};
