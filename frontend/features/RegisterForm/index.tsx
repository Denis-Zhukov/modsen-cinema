'use client';

import React, { useRef } from 'react';

import { inriaSansFont, poppinsFont } from '@/shared/fonts';
import { Modal } from '@/shared/ui/Modal';
import { TextBox } from '@/shared/ui/TextBox';

import AccountIcon from './images/account-icon.svg';
import EmailIcon from './images/email-icon.svg';
import GroupIcon from './images/group-icon.svg';
import PasswordIcon from './images/password-icon.svg';
import { StyledAuthBlock, StyledBody, StyledTitle } from './styled';
import { Button } from "@/shared/ui/Button";

type Props = {
    onClose: () => void
};

export const RegisterForm = ({ onClose }: Props) => {
    const nameRef = useRef<HTMLInputElement>(null);
    const surnameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    return (
        <Modal
            topElement={(
                <StyledTitle className={inriaSansFont.className}>
                    Great Movies in the best cinema! We care about your comfort.
                    {' '}
                    <span>
                        Join us
                        Right Now!
                    </span>
                </StyledTitle>
            )}
            onClose={onClose}
        >
            <StyledBody className={poppinsFont.className}>
                <TextBox ref={nameRef} icon={AccountIcon} placeholder="Enter your name" type="text"/>
                <TextBox ref={surnameRef} icon={GroupIcon} placeholder="Enter your surname" type="text"/>
                <TextBox ref={emailRef} icon={EmailIcon} placeholder="Enter your email" type="email"/>
                <TextBox ref={passwordRef} icon={PasswordIcon} placeholder="Enter strong password" type="password"/>

                <StyledAuthBlock>
                    <Button>Register</Button>
                    <div>
                        <div>google</div>
                        <div>facebook</div>
                        <div>github</div>
                    </div>
                    <div>Already has an account? Login please.</div>
                </StyledAuthBlock>
            </StyledBody>
        </Modal>
    );
};
