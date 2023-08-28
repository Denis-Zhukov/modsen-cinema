import {
    AiOutlineFullscreen, AiOutlineFullscreenExit, AiOutlinePauseCircle, AiOutlinePlayCircle,
} from 'react-icons/ai';
import { Timeline } from 'shared/ui/VideoPlayer/components/Timeline';

import {
    StyledControlBar, StyledIconButton,
} from '@/shared/ui/VideoPlayer/components/ControlBar/styled';
import { VolumeBar } from '@/shared/ui/VideoPlayer/components/VolumeBar';
import { useVideoPlayerContext } from '@/shared/ui/VideoPlayer/context';
import { useToggleFullscreen } from '@/shared/ui/VideoPlayer/hooks/useToggleFullscreen';
import { useTogglePlaying } from '@/shared/ui/VideoPlayer/hooks/useTogglePlaying';

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
