import {
    AiOutlineFullscreen, AiOutlineFullscreenExit, AiOutlinePauseCircle, AiOutlinePlayCircle,
} from 'react-icons/ai';

import { useVideoPlayerContext } from '../../context';
import { useToggleFullscreen } from '../../hooks/useToggleFullscreen';
import { useTogglePlaying } from '../../hooks/useTogglePlaying';
import { Timeline } from '../Timeline';
import { VolumeBar } from '../VolumeBar';
import {
    StyledControlBar, StyledIconButton,
} from './styled';

export const ControlBar = () => {
    const { state: { isPlaying, isFullscreen } } = useVideoPlayerContext();
    const handleStartPause = useTogglePlaying();
    const handleFullscreen = useToggleFullscreen();

    return (
        <StyledControlBar
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <StyledIconButton
                tabIndex={-1}
                onClick={handleStartPause}
                type="button"
            >
                {isPlaying ? <AiOutlinePauseCircle/> : <AiOutlinePlayCircle/>}
            </StyledIconButton>

            <Timeline/>

            <VolumeBar/>

            <StyledIconButton
                tabIndex={-1}
                type="button"
                onClick={handleFullscreen}
            >
                {isFullscreen ? <AiOutlineFullscreenExit/> : <AiOutlineFullscreen/>}
            </StyledIconButton>
        </StyledControlBar>
    );
};
