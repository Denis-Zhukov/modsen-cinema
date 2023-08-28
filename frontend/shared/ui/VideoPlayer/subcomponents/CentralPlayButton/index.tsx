import { useCallback } from 'react';

import { SET_PLAYING, useVideoPlayerContext } from '../../context';
import {
    StyledPlayButton,
    StyledTriangle,
} from './styled';

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
