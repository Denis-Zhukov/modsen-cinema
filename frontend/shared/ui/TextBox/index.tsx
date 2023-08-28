import { Field } from 'formik';
import Image from 'next/image';
import type { ForwardedRef, InputHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { poppinsFont } from '@/shared/lib/fonts';

import { StyledTextBox } from './styled';
import type { TextBoxType } from './type';

type Props = {
    icon: string
    type: TextBoxType,
} & InputHTMLAttributes<HTMLInputElement>;

export const TextBox = forwardRef(({
    icon,
    placeholder,
    type,
    name,
    className,
    ...props
}: Props, ref: ForwardedRef<HTMLInputElement>) => (
    <StyledTextBox className={`${poppinsFont.className} ${className}`}>
        <Image src={icon} alt="input-icon" width={64} height={64}/>
        <Field
            placeholder={placeholder}
            ref={ref}
            type={type}
            name={name}
            {...props}
        />
    </StyledTextBox>
));
