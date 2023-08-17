'use client';

import { Form, Formik } from 'formik';
import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';

import { FacebookLoginButton } from '@/entities/ui/FacebookLoginButton';
import { GithubLoginButton } from '@/entities/ui/GithubLoginButton';
import { GoogleLoginButton } from '@/entities/ui/GoogleLoginButton';
import { getPasswordComplexity, validationSchema } from '@/features/RegisterForm/validations';
import { Forms } from '@/shared/constants/Forms';
import { inriaSansFont, poppinsFont } from '@/shared/fonts';
import { useCreateQueryPath } from '@/shared/hooks/useCreateQueryPath';
import { useSwitchForm } from '@/shared/hooks/useSwitchForm';
import { toastError, toastSuccess } from '@/shared/lib/toast';
import { useRegisterMutation } from '@/shared/store/rtk/auth.rtk';
import { RegisterRequest } from '@/shared/typing/api/requests/RegisterRequest';
import { Notice } from '@/shared/typing/constants/Notice';
import { isTypedError } from '@/shared/typing/guards/isTypedError';
import { Button } from '@/shared/ui/Button';
import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';
import { TextBox } from '@/shared/ui/TextBox';

import AccountIcon from './images/account-icon.svg';
import EmailIcon from './images/email-icon.svg';
import GroupIcon from './images/group-icon.svg';
import PasswordIcon from './images/password-icon.svg';
import {
    StyledAuthBlock,
    StyledBody,
    StyledBottomText,
    StyledErrorText,
    StyledLoader,
    StyledPasswordComplexity,
    StyledTitle,
} from './styled';

type Props = {
    onClose: () => void
};

export const RegisterForm = ({ onClose }: Props) => {
    const [register, {
        isLoading,
        isSuccess,
        isError,
        error,
    }] = useRegisterMutation();

    const createQueryPath = useCreateQueryPath();
    const switchForm = useSwitchForm();

    const [currentRequest, setCurrentRequest] = useState<{ abort:() => void } | null>(null);
    const onSubmit = useCallback((values: RegisterRequest) => {
        if (currentRequest) currentRequest.abort();
        const request = register(values);
        setCurrentRequest(request);
    }, [currentRequest, register]);

    useEffect(() => {
        if (isSuccess) {
            toastSuccess(Notice.REGISTRATION_SUCCESSFUL);
            switchForm(Forms.LOGIN_FORM);
        } else if (isError && isTypedError(error)) {
            toastError(error.data.message);
        } else if (isError) toastError(Notice.UNEXPECTED_ERROR);
    }, [error, isError, isSuccess, switchForm]);

    useEffect(() => () => {
        if (currentRequest) currentRequest.abort();
    }, [currentRequest]);

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
            {isLoading && <StyledLoader><Loader/></StyledLoader>}
            <Formik
                initialValues={{
                    name: '',
                    surname: '',
                    email: '',
                    password: '',
                }}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({
                    errors,
                    touched,
                    values,
                }) => (
                    <StyledBody className={poppinsFont.className}>
                        <Form>
                            <TextBox
                                name="name"
                                icon={AccountIcon}
                                placeholder="Enter your name"
                                type="text"
                            />
                            <StyledErrorText>{touched.name && errors.name}</StyledErrorText>

                            <TextBox
                                name="surname"
                                icon={GroupIcon}
                                placeholder="Enter your surname"
                                type="text"
                            />
                            <StyledErrorText>{touched.surname && errors.surname}</StyledErrorText>

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
                                placeholder="Enter strong password"
                                type="password"
                            />
                            <StyledPasswordComplexity
                                min="0"
                                low={33}
                                high={66}
                                optimum={100}
                                max={100}
                                value={getPasswordComplexity(values.password)}
                            />
                            <StyledErrorText>{touched.password && errors.password}</StyledErrorText>

                            <StyledAuthBlock>
                                <Button type="submit">Register</Button>
                                <div>
                                    <GoogleLoginButton/>
                                    <FacebookLoginButton/>
                                    <GithubLoginButton/>
                                </div>
                                <StyledBottomText className={inriaSansFont.className}>
                                    Already has an
                                    account?
                                    {' '}
                                    <Link href={createQueryPath('form', Forms.LOGIN_FORM)}>
                                        Login please.
                                    </Link>
                                </StyledBottomText>
                            </StyledAuthBlock>
                        </Form>
                    </StyledBody>
                )}
            </Formik>
        </Modal>
    );
};
