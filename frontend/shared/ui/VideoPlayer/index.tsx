'use client';

import 'plyr-react/plyr.css';
import './video-player-styles.css';

import Plyr from 'plyr-react';

import { StyledVideoWrapper } from './styled';

type Props = {
    src: string
    provider?: 'html5' | 'youtube'
    preview?: boolean,
};

const defaultOptions = {
    controls: ['play-large', 'play', 'progress', 'current-time', 'volume', 'mute', 'captions', 'settings', 'fullscreen'],
    settings: ['quality', 'speed', 'loop'],
    keyboard: {
        global: false,
        focused: true,
    },
    storage: { enabled: true, key: 'player' },
};

const previewOptions = {
    controls: ['play-large'],
    settings: [],
    keyboard: {
        global: false,
        focused: false,
    },
};

export const VideoPlayer = ({ src, provider = 'html5', preview = false }: Props) => (
    <StyledVideoWrapper>
        <Plyr
            source={{
                type: 'video',
                sources: [{ src, provider }],
            }}
            options={preview ? previewOptions : defaultOptions}
        />
    </StyledVideoWrapper>
);
