import {
    AiOutlineFullscreen, AiOutlineFullscreenExit, AiOutlinePauseCircle, AiOutlinePlayCircle,
} from 'react-icons/ai';

import {
    StyledControlBar, StyledIconButton,
} from '@/shared/ui/VideoPlayer/components/ControlBar/styled';
import { Timeline } from 'shared/ui/VideoPlayer/components/Timeline';
import { VolumeBar } from '@/shared/ui/VideoPlayer/components/VolumeBar';
import { useVideoPlayerContext } from '@/shared/ui/VideoPlayer/context';
import { useShowControls } from '@/shared/ui/VideoPlayer/hooks/useShowControls';
import { useToggleFullscreen } from '@/shared/ui/VideoPlayer/hooks/useToggleFullscreen';
import { useTogglePlaying } from '@/shared/ui/VideoPlayer/hooks/useTogglePlaying';

export const ControlBar = () => {
    const { state: { isPlaying, isFullscreen } } = useVideoPlayerContext();
    const showControls = useShowControls();
    const handleStartPause = useTogglePlaying();
    const handleFullscreen = useToggleFullscreen();

    if (!showControls) return null;

    return (
        <StyledControlBar>
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
