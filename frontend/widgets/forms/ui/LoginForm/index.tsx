'use client';

import { Form, Formik } from 'formik';
import { AnimatePresence } from 'framer-motion';
import { Button } from 'monema-ui';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useCallback, useEffect, useMemo } from 'react';

import { FacebookLoginButton, GithubLoginButton, GoogleLoginButton } from '@/features/auth';
import { Colors } from '@/shared/config/constants/Colors';
import { Forms } from '@/shared/config/constants/Forms';
import { inriaSansFont, poppinsFont } from '@/shared/lib/fonts';
import { useAppSelector } from '@/shared/lib/hooks/redux-hooks';
import { useActions } from '@/shared/lib/hooks/useActions';
import { useCreateQueryPath } from '@/shared/lib/hooks/useCreateQueryPath';
import { useInitForm } from '@/shared/lib/hooks/useInitForm';
import { LoginRequest } from '@/shared/model/store/rtk/typing/requests/LoginRequest';
import { selectAuth } from '@/shared/model/store/selectors/auth.selectors';
import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';
import { TextBox } from '@/shared/ui/TextBox';
import { validationSchema } from '@/widgets/forms/model/validations/loginValidation';

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
    const { active, handleCloseForm } = useInitForm(Forms.LOGIN);

    const { isLoading } = useAppSelector(selectAuth);
    const { login, resetStatuses } = useActions();

    const createQueryPath = useCreateQueryPath();

    const controller = useMemo(() => new AbortController(), []);
    const onSubmit = useCallback((values: LoginRequest) => {
        login({ controller, ...values });
    }, [controller, login]);

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
                                    {isLoading && (
                                        <StyledLoader><Loader
                                            color={Colors.ORANGE}
                                        />
                                        </StyledLoader>
                                    )}

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
