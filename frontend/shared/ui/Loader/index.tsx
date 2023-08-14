import { LineWave } from 'react-loader-spinner';

export const Loader = () => (
    <LineWave
        height="250"
        width="250"
        color="#D98639"
        wrapperStyle={{
            transform: 'translateX(18%)',
        }}
        visible
    />
);
