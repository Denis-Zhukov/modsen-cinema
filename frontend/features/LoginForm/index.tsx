'use client';

import { Formik } from 'formik';
import Link from 'next/link';
import React from 'react';

import { validationSchema } from '@/features/LoginForm/validations';
import { inriaSansFont, poppinsFont } from '@/shared/fonts';
import { useCreateQueryPath } from '@/shared/hooks/useCreateQueryPath';
import { Button } from '@/shared/ui/Button';
import { Modal } from '@/shared/ui/Modal';
import { TextBox } from '@/shared/ui/TextBox';

import EmailIcon from './images/email-icon.svg';
import PasswordIcon from './images/password-icon.svg';
import {
    StyledAuthBlock,
    StyledBody,
    StyledBottomText,
    StyledErrorText,
    StyledTitle,
} from './styled';

type Props = {
    onClose: () => void
};

export const LoginForm = ({ onClose }: Props) => {
    const createQueryPath = useCreateQueryPath();

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
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema}
            >
                {({
                      touched,
                      errors
                  }) => (
                    <StyledBody className={poppinsFont.className}>
                        <TextBox
                            name="email"
                            icon={EmailIcon}
                            placeholder="Enter your email"
                            type="email"
                        />
                        <StyledErrorText>{touched.email && errors.email}</StyledErrorText>
                        <TextBox
                            name="password"
                            icon={PasswordIcon}
                            placeholder="Enter your password"
                            type="password"
                        />
                        <StyledErrorText>{touched.password && errors.password}</StyledErrorText>

                        <StyledAuthBlock>
                            <Button>Login</Button>
                            <div> AUTH_BLOCK</div>
                            <StyledBottomText>
                                No account?
                                {' '}
                                <Link href={createQueryPath('form', 'register')}>
                                    Sign up please.
                                </Link>
                            </StyledBottomText>
                        </StyledAuthBlock>
                    </StyledBody>
                )}
            </Formik>
        </Modal>
    );
};
