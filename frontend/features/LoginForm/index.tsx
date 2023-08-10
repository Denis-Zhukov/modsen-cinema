'use client';

import React, { useRef } from 'react';

import { inriaSansFont, poppinsFont } from '@/shared/fonts';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { TextBox } from '@/shared/ui/TextBox';

import EmailIcon from './images/email-icon.svg';
import PasswordIcon from './images/password-icon.svg';
import { StyledAuthBlock, StyledBody, StyledTitle } from './styled';

type Props = {
    onClose: () => void
};

export const LoginForm = ({ onClose }: Props) => {
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    return (
        <Modal
            topElement={(
                <StyledTitle className={inriaSansFont.className}>
                    We are glad to see you again!
                    {' '}
                    <span> Enjoy watching movies with us!</span>
                </StyledTitle>
            )}
            onClose={onClose}
        >
            <StyledBody className={poppinsFont.className}>
                <TextBox
                    ref={emailRef}
                    icon={EmailIcon}
                    placeholder="Enter your email"
                    type="email"
                />
                <TextBox
                    ref={passwordRef}
                    icon={PasswordIcon}
                    placeholder="Enter your password"
                    type="password"
                />

                <StyledAuthBlock>
                    <Button>Login</Button>
                    <div>
                        <div>google</div>
                        <div>facebook</div>
                        <div>github</div>
                    </div>
                    <div>No account? Sign up please.</div>
                </StyledAuthBlock>
            </StyledBody>
        </Modal>
    );
};
