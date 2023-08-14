import { Field } from 'formik';
import Image from 'next/image';
import * as React from 'react';
import { forwardRef } from 'react';

import { poppinsFont } from '@/shared/fonts';

import { StyledTextBox } from './styled';

type Props = {
    icon: string
    placeholder: string,
    type: 'email' | 'text' | 'password',
    name: string,
};
export const TextBox = forwardRef(({
    icon,
    placeholder,
    type,
    name,
}: Props, ref: React.ForwardedRef<HTMLInputElement>) => (
    <StyledTextBox className={poppinsFont.className}>
        <Image src={icon} alt="input-icon" width={64} height={64}/>
        <Field
            placeholder={placeholder}
            ref={ref}
            type={type}
            name={name}
        />
    </StyledTextBox>
));
