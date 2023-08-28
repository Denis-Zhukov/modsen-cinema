import {
    ChangeEvent, useEffect, useState,
} from 'react';
import { BsFillVolumeMuteFill, BsFillVolumeUpFill } from 'react-icons/bs';

import { StyledVolumeBar } from '@/shared/ui/VideoPlayer/components/VolumeBar/styled';
import { useVideoPlayerContext } from '@/shared/ui/VideoPlayer/context';
import { useToggleMute } from '@/shared/ui/VideoPlayer/hooks/useToggleMute';

export const VolumeBar = () => {
    const {
        state: {
            videoRef,
            volume: defaultVolume,
        },
    } = useVideoPlayerContext();

    const [volume, setVolume] = useState(defaultVolume);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = parseFloat(e.target.value);
        if (!videoRef.current || Number.isNaN(value)) return;
        videoRef.current.volume = value;
        setVolume(value);
    };

    const handleClickMute = useToggleMute(setVolume);

    useEffect(() => {
        if (videoRef.current) videoRef.current.volume = volume;
    }, [videoRef]);

    return (
        <StyledVolumeBar>
            <div onClick={handleClickMute}>
                {volume > 0 ? <BsFillVolumeUpFill/> : <BsFillVolumeMuteFill/>}
            </div>
            <input type="range" min="0" max="1" step="0.05" onChange={onChange} value={volume}/>
        </StyledVolumeBar>
    );
};
