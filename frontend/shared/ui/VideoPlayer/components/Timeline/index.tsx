import React, { useCallback, useMemo } from 'react';

import { poppinsFont } from '@/shared/fonts';
import { TimeUtils } from '@/shared/lib/TimeUtils';
import {
    StyledPreloadedTimeBar,
    StyledProgressTimeBar,
    StyledTimeBar,
    StyledTimeBarWrapper,
    StyledTimer,
} from '@/shared/ui/VideoPlayer/components/Timeline/styled';
import { useVideoPlayerContext } from '@/shared/ui/VideoPlayer/context';
import { useInitTimeUtils } from '@/shared/ui/VideoPlayer/hooks/useInitTimeUtils';

export const Timeline = () => {
    const { state: { videoRef } } = useVideoPlayerContext();

    const {
        currentTime, duration, bufferedTime, seekTo,
    } = useInitTimeUtils();

    const handleTimelineClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
        const wrapper = event.currentTarget;
        const { offsetWidth } = wrapper;
        const { offsetX } = event.nativeEvent;
        const calculatedPercentage = parseFloat(((offsetX / offsetWidth) * 100).toFixed(4));
        const current = (duration * calculatedPercentage) / 100;
        seekTo(current);
    }, [seekTo, duration]);

    const displayedDuration = useMemo(() => TimeUtils.formatTime(duration), [duration]);

    if (!videoRef.current) return null;

    const displayedCurrentTime = TimeUtils.formatTime(currentTime);
    const playedPercentage = (currentTime / duration) * 100;
    const bufferedPercentage = (bufferedTime / duration) * 100;

    return (
        <StyledTimeBarWrapper>
            <StyledTimeBar onClick={handleTimelineClick}>
                <StyledProgressTimeBar style={{ width: `${playedPercentage}%` }}/>
                <StyledPreloadedTimeBar style={{ width: `${bufferedPercentage}%` }}/>
            </StyledTimeBar>
            <StyledTimer className={poppinsFont.className}>
                {displayedCurrentTime}
                /
                {displayedDuration}
            </StyledTimer>
        </StyledTimeBarWrapper>
    );
};
