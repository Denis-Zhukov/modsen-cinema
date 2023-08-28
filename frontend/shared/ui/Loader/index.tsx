import { LineWave } from 'react-loader-spinner';

type Props = {
    color: string
};

export const Loader = ({ color }: Props) => (
    <LineWave
        height="250"
        width="250"
        color={color}
        wrapperStyle={{ transform: 'translateX(18%)' }}
        visible
    />
);
