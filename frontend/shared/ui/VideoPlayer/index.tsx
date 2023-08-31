'use client';

import { AnimatePresence } from 'framer-motion';
import {
    ForwardedRef,
    forwardRef,
    MutableRefObject, useCallback, useEffect, useMemo, useReducer, useRef,
} from 'react';

import { Modal } from '@/shared/ui/Modal';

import {
    reducer, SET_LAUNCHED, SET_PLAYING,
    useVideoPlayerContext,
    VideoPlayerContext,
} from './context';
import { useBindHotKeys } from './hooks/useBindHotKeys';
import { useShowControls } from './hooks/useShowControls';
import { StyledPreview, StyledVideoWrapper } from './styled';
import { CentralPlayButton } from './subcomponents/CentralPlayButton';
import { ControlBar } from './subcomponents/ControlBar';
import { Video } from './subcomponents/Video';

type Props = {
    videoContainerRef: MutableRefObject<HTMLDivElement | null>
    videoRef: MutableRefObject<HTMLVideoElement | null>
    src: string
    preview?: string
    className?: string
    muted?: boolean,
};

const VideoPlayerInner = ({
    videoRef,
    className,
    src,
    videoContainerRef,
    preview,
}: Props) => {
    const {
        state: {
            isPlaying,
        },
        dispatch,
    } = useVideoPlayerContext();

    useEffect(() => {
        const setWasLaunched = () => dispatch({
            type: SET_LAUNCHED,
            payload: true,
        });
        videoRef.current?.addEventListener('play', setWasLaunched);
        return () => videoRef.current?.removeEventListener('play', setWasLaunched);
    }, [dispatch, videoRef]);

    useBindHotKeys();
    const showControls = useShowControls();

    const videoPlayer = (
        <StyledVideoWrapper
            className={className}
            ref={videoContainerRef}
        >
            <Video
                src={src}
                ref={videoRef}
            />

            {!isPlaying && <CentralPlayButton/>}

            <AnimatePresence>
                {showControls && <ControlBar/>}
            </AnimatePresence>

            {preview && !isPlaying && <StyledPreview src={preview} fill alt="preview"/>}
        </StyledVideoWrapper>
    );

    const handleCloseModal = useCallback(() => {
        videoRef.current?.pause();
        dispatch({
            type: SET_PLAYING,
            payload: false,
        });
    }, [videoRef, dispatch]);

    return isPlaying ? (
        <Modal onClose={handleCloseModal}>
            {videoPlayer}
        </Modal>
    ) : videoPlayer;
};

export const VideoPlayer = ({
    src,
    preview,
    className = '',
    muted = false,
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

    const memoState = useMemo(() => ({
        state,
        dispatch,
    }), [state]);

    return (
        <VideoPlayerContext.Provider value={memoState}>
            <VideoPlayerInner
                src={src}
                preview={preview}
                className={className}
                videoRef={videoRef}
                videoContainerRef={videoContainerRef}
            />
        </VideoPlayerContext.Provider>
    );
};
