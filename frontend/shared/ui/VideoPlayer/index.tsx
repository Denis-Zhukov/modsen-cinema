'use client';

import {
    MutableRefObject, useEffect, useReducer, useRef,
} from 'react';

import { CentralPlayButton } from '@/shared/ui/VideoPlayer/components/CentralPlayButton';
import { ControlBar } from '@/shared/ui/VideoPlayer/components/ControlBar';
import { Video } from '@/shared/ui/VideoPlayer/components/Video';
import {
    reducer, SET_LAUNCHED,
    useVideoPlayerContext,
    VideoPlayerContext,
} from '@/shared/ui/VideoPlayer/context';
import { useBindHotKeys } from '@/shared/ui/VideoPlayer/hooks/useBindHotKeys';

import { StyledPreview, StyledVideoWrapper } from './styled';

type Props = {
    videoContainerRef: MutableRefObject<HTMLDivElement | null>
    videoRef: MutableRefObject<HTMLVideoElement | null>
    src: string
    preview?: string
    className?: string
    controls?: boolean
    muted?: boolean,
};

const VideoPlayerInner = ({
    videoRef, className, src, videoContainerRef, preview, controls,
}: Props) => {
    const { state: { isPlaying, wasLaunched }, dispatch } = useVideoPlayerContext();

    useEffect(() => {
        const setWasLaunched = () => dispatch({ type: SET_LAUNCHED, payload: true });
        videoRef.current?.addEventListener('play', setWasLaunched);
        return () => videoRef.current?.removeEventListener('play', setWasLaunched);
    }, [dispatch, videoRef]);

    useBindHotKeys();

    return (
        <StyledVideoWrapper
            className={className}
            ref={videoContainerRef}
        >
            <Video
                src={src}
                ref={videoRef}
            />

            {!isPlaying && <CentralPlayButton/>}

            {controls && <ControlBar/>}

            {!wasLaunched && preview && <StyledPreview src={preview} fill alt="preview"/>}
        </StyledVideoWrapper>
    );
};

export const VideoPlayer = ({
    src, preview, className = '', controls = true, muted = false,
}: Omit<Props, 'videoContainerRef' | 'videoRef'>) => {
    const videoContainerRef = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const [state, dispatch] = useReducer(reducer, {
        videoContainerRef,
        videoRef,
        isPlaying: false,
        isFullscreen: false,
        wasLaunched: false,
        volume: muted ? 0 : 1,
    });

    return (
        <VideoPlayerContext.Provider value={{ state, dispatch }}>
            <VideoPlayerInner
                src={src}
                preview={preview}
                className={className}
                controls={controls}
                videoRef={videoRef}
                videoContainerRef={videoContainerRef}
            />
        </VideoPlayerContext.Provider>
    );
};
