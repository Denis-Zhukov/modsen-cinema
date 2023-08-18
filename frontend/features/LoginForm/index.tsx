'use client';

import { Form, Formik } from 'formik';
import Link from 'next/link';
import React, { useCallback, useEffect, useMemo } from 'react';

import { FacebookLoginButton } from '@/entities/ui/FacebookLoginButton';
import { GithubLoginButton } from '@/entities/ui/GithubLoginButton';
import { GoogleLoginButton } from '@/entities/ui/GoogleLoginButton';
import { validationSchema } from '@/features/LoginForm/validations';
import { Forms } from '@/shared/constants/Forms';
import { inriaSansFont, poppinsFont } from '@/shared/fonts';
import { useAppSelector } from '@/shared/hooks/redux-hooks';
import { useActions } from '@/shared/hooks/useActions';
import { useCreateQueryPath } from '@/shared/hooks/useCreateQueryPath';
import { useSwitchForm } from '@/shared/hooks/useSwitchForm';
import { toastError, toastSuccess } from '@/shared/lib/toast';
import { selectAuth } from '@/shared/store/selectors/auth.selectors';
import { LoginRequest } from '@/shared/typing/api/requests/LoginRequest';
import { Notice } from '@/shared/typing/constants/Notice';
import { Button } from '@/shared/ui/Button';
import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';
import { TextBox } from '@/shared/ui/TextBox';

import EmailIcon from './images/email-icon.svg';
import PasswordIcon from './images/password-icon.svg';
import {
    StyledAuthBlock,
    StyledBody,
    StyledBottomText,
    StyledErrorText,
    StyledLoader,
    StyledTitle,
} from './styled';

type Props = {
    onClose: () => void
};

export const LoginForm = ({ onClose }: Props) => {
    const {
        error, isLoading, isAuth,
    } = useAppSelector(selectAuth);
    const { login, resetStatuses } = useActions();

    const createQueryPath = useCreateQueryPath();
    const switchForm = useSwitchForm();

    const controller = useMemo(() => new AbortController(), []);
    const onSubmit = useCallback((values: LoginRequest) => {
        login({ controller, ...values });
    }, [controller, login]);

    useEffect(() => {
        if (isAuth) {
            switchForm(Forms.NONE);
            toastSuccess(Notice.AUTH_SUCCESSFUL);
        } else if (error) toastError(error);
    }, [error, switchForm, isAuth]);

    useEffect(() => {
        resetStatuses();
        return () => controller.abort();
    }, [resetStatuses, controller]);

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
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({
                    touched,
                    errors,
                }) => (
                    <Form>
                        <StyledBody className={poppinsFont.className}>
                            {isLoading && <StyledLoader><Loader/></StyledLoader>}

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
                                <Button type="submit">Login</Button>
                                <div>
                                    <GoogleLoginButton/>
                                    <FacebookLoginButton/>
                                    <GithubLoginButton/>
                                </div>
                                <StyledBottomText>
                                    No account?
                                    {' '}
                                    <Link href={createQueryPath('form', Forms.REGISTER_FORM)}>
                                        Sign up please.
                                    </Link>
                                </StyledBottomText>
                            </StyledAuthBlock>
                        </StyledBody>
                    </Form>
                )}
            </Formik>
        </Modal>
    );
};
