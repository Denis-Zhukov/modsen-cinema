import Image from 'next/image';
import * as React from 'react';
import { forwardRef } from 'react';

import { poppinsFont } from '@/shared/fonts';

import { StyledTextBox } from './styled';

type Props = {
    icon: string
    placeholder: string,
    type: 'email' | 'text' | 'password'
};
export const TextBox = forwardRef(({
    icon,
    placeholder,
    type,
}: Props, ref: React.ForwardedRef<HTMLInputElement>) => (
    <StyledTextBox className={poppinsFont.className}>
        <Image src={icon} alt="input-icon" width={64} height={64}/>
        <input placeholder={placeholder} ref={ref} type={type}/>
    </StyledTextBox>
));
