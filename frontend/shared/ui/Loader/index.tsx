import { LineWave } from 'react-loader-spinner';

import { Colors } from '@/shared/constants/Colors';

export const Loader = () => (
    <LineWave
        height="250"
        width="250"
        color={Colors.ORANGE}
        wrapperStyle={{
            transform: 'translateX(18%)',
        }}
        visible
    />
);
