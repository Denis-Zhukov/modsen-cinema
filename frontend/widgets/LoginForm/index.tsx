'use client';

import { Form, Formik } from 'formik';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useCallback, useEffect, useMemo } from 'react';

import { FacebookLoginButton } from 'features/auth/ui/FacebookLoginButton';
import { GithubLoginButton } from 'features/auth/ui/GithubLoginButton';
import { GoogleLoginButton } from 'features/auth/ui/GoogleLoginButton';
import { validationSchema } from '@/widgets/LoginForm/validations';
import { Forms } from '@/shared/config/constants/Forms';
import { inriaSansFont, poppinsFont } from '@/shared/lib/fonts';
import { useAppSelector } from '@/shared/lib/hooks/redux-hooks';
import { useActions } from '@/shared/lib/hooks/useActions';
import { useCreateQueryPath } from '@/shared/lib/hooks/useCreateQueryPath';
import { useInitForm } from '@/shared/lib/hooks/useInitForm';
import { useSwitchForm } from '@/shared/lib/hooks/useSwitchForm';
import { toastError, toastSuccess } from '@/shared/lib/utils/toast';
import { selectAuth } from '@/shared/model/store/selectors/auth.selectors';
import { LoginRequest } from '@/shared/model/store/rtk/typing/requests/LoginRequest';
import { Notice } from '@/shared/config/constants/Notice';
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
    StyledLoader, StyledSocials,
    StyledTitle,
} from './styled';

export const LoginForm = () => {
    const {
        active,
        handleCloseForm,
    } = useInitForm(Forms.LOGIN);

    const {
        error,
        isLoading,
        isAuth,
    } = useAppSelector(selectAuth);
    const {
        login,
        resetStatuses,
    } = useActions();

    const createQueryPath = useCreateQueryPath();
    const switchForm = useSwitchForm();

    const controller = useMemo(() => new AbortController(), []);
    const onSubmit = useCallback((values: LoginRequest) => {
        login({ controller, ...values });
    }, [controller, login]);

    useEffect(() => {
        if (isAuth) {
            // switchForm(Forms.NONE);
            toastSuccess(Notice.AUTH_SUCCESSFUL);
        } else if (error) toastError(error);
    }, [error, switchForm, isAuth]);

    useEffect(() => {
        resetStatuses();
        return () => controller.abort();
    }, [resetStatuses, controller]);

    const t = useTranslations('login');

    return (
        <AnimatePresence>
            {active && (
                <Modal
                    topElement={(
                        <StyledTitle className={inriaSansFont.className}>
                            {t('title')} <span>{t('subtitle')}</span>
                        </StyledTitle>
                    )}
                    onClose={handleCloseForm}
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
                                        placeholder={t('emailPlaceholder')}
                                        type="email"
                                    />
                                    <StyledErrorText>{touched.email && errors.email}</StyledErrorText>

                                    <TextBox
                                        name="password"
                                        icon={PasswordIcon}
                                        placeholder={t('passwordPlaceholder')}
                                        type="password"
                                    />
                                    <StyledErrorText>{touched.password && errors.password}</StyledErrorText>

                                    <StyledAuthBlock>
                                        <Button type="submit">{t('login')}</Button>
                                        <StyledSocials>
                                            <GoogleLoginButton/>
                                            <FacebookLoginButton/>
                                            <GithubLoginButton/>
                                        </StyledSocials>
                                        <StyledBottomText>
                                            {t('subtext')}{' '}
                                            <Link
                                                href={createQueryPath('form', Forms.REGISTER)}
                                            >{t('clickableSubtext')}
                                            </Link>
                                        </StyledBottomText>
                                    </StyledAuthBlock>
                                </StyledBody>
                            </Form>
                        )}
                    </Formik>
                </Modal>
            )}
        </AnimatePresence>
    );
};
