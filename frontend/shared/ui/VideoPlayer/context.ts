import {
    createContext, createRef, Dispatch, MutableRefObject, useContext,
} from 'react';

type State = {
    videoContainerRef: MutableRefObject<HTMLDivElement | null>
    videoRef: MutableRefObject<HTMLVideoElement | null>
    isPlaying: boolean,
    isFullscreen: boolean,
    wasLaunched: boolean,
    volume: number,
};

export const SET_DURATION = 'SET_DURATION';
export const TOGGLE_PLAYING = 'TOGGLE_PLAYING';

export const SET_PLAYING = 'SET_PLAYING';
export const TOGGLE_FULLSCREEN = 'TOGGLE_FULLSCREEN';
export const SET_LAUNCHED = 'SET_LAUNCHED';

type Action =
    {
        type: 'SET_DURATION',
        payload: number
    }
    | {
    type: 'SET_PLAYING',
    payload: boolean
}
    | {
    type: 'TOGGLE_PLAYING'
}
    | {
    type: 'TOGGLE_FULLSCREEN'
}
    | {
    type: 'SET_LAUNCHED',
    payload: boolean
};

export const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case SET_DURATION:
            return ({ ...state, duration: action.payload });
        case SET_PLAYING:
            return ({ ...state, isPlaying: action.payload });
        case TOGGLE_PLAYING:
            return ({ ...state, isPlaying: !state.isPlaying });
        case TOGGLE_FULLSCREEN:
            return ({ ...state, isFullscreen: !state.isFullscreen });
        case SET_LAUNCHED:
            return ({ ...state, wasLaunched: action.payload });
        default:
            return state;
    }
};

type Context = {
    state: State,
    dispatch: Dispatch<Action>
};
export const VideoPlayerContext = createContext<Context>({
    state: {
        videoContainerRef: createRef(),
        videoRef: createRef(),
        isPlaying: false,
        isFullscreen: false,
        wasLaunched: false,
        volume: 1,
    },
    dispatch: () => {
    },
});

export const useVideoPlayerContext = () => useContext(VideoPlayerContext);
