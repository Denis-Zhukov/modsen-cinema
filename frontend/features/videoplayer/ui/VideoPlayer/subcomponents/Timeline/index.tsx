import type { MouseEvent } from 'react';
import { useCallback, useMemo } from 'react';

import { useInitTimeUtils } from '@/features/videoplayer/model/hooks/useInitTimeUtils';
import { poppinsFont } from '@/shared/lib/fonts';
import { DateTimeUtils } from '@/shared/lib/utils/DateTimeUtils';

import { useVideoPlayerContext } from '../../context';
import {
    StyledPreloadedTimeBar,
    StyledProgressTimeBar,
    StyledTimeBar,
    StyledTimeBarWrapper,
    StyledTimer,
} from './styled';

export const Timeline = () => {
    const { state: { videoRef } } = useVideoPlayerContext();

    const {
        currentTime,
        duration,
        bufferedTime,
        seekTo,
    } = useInitTimeUtils();

    const handleTimelineClick = useCallback((event: MouseEvent<HTMLDivElement>) => {
        const wrapper = event.currentTarget;
        const { offsetWidth } = wrapper;
        const { offsetX } = event.nativeEvent;
        const calculatedPercentage = parseFloat(((offsetX / offsetWidth) * 100).toFixed(4));
        const current = (duration * calculatedPercentage) / 100;
        seekTo(current);
    }, [seekTo, duration]);

    const displayedDuration = useMemo(() => DateTimeUtils.formatTime(duration), [duration]);

    if (!videoRef.current) return null;

    const displayedCurrentTime = DateTimeUtils.formatTime(currentTime);
    const playedPercentage = (currentTime / duration) * 100;
    const bufferedPercentage = (bufferedTime / duration) * 100;

    return (
        <StyledTimeBarWrapper>
            <StyledTimeBar onClick={handleTimelineClick}>
                <StyledProgressTimeBar style={{ width: `${playedPercentage}%` }}/>
                <StyledPreloadedTimeBar style={{ width: `${bufferedPercentage}%` }}/>
            </StyledTimeBar>
            <StyledTimer className={poppinsFont.className}>
                {displayedCurrentTime} / {displayedDuration}
            </StyledTimer>
        </StyledTimeBarWrapper>
    );
};
