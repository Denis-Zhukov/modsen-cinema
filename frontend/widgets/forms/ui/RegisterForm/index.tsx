'use client';

import { Form, Formik } from 'formik';
import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import React, { useCallback, useEffect, useState } from 'react';

import {
    FacebookLoginButton,
    GithubLoginButton,
    GoogleLoginButton,
} from '@/features/auth';
import { Colors } from '@/shared/config/constants/Colors';
import { Forms } from '@/shared/config/constants/Forms';
import { Notice } from '@/shared/config/constants/Notice';
import { inriaSansFont, poppinsFont } from '@/shared/lib/fonts';
import { useAppSelector } from '@/shared/lib/hooks/redux-hooks';
import { useCreateQueryPath } from '@/shared/lib/hooks/useCreateQueryPath';
import { useInitForm } from '@/shared/lib/hooks/useInitForm';
import { useSwitchForm } from '@/shared/lib/hooks/useSwitchForm';
import { ErrorUtils } from '@/shared/lib/utils/ErrorUtils';
import { toastError, toastSuccess } from '@/shared/lib/utils/ToastUtils';
import { useRegisterMutation } from '@/shared/model/store/rtk/auth.rtk';
import { RegisterRequest } from '@/shared/model/store/rtk/typing/requests/RegisterRequest';
import { selectIsAuth } from '@/shared/model/store/selectors/auth.selectors';
import { Button } from '@/shared/ui';
import { Loader } from '@/shared/ui/Loader';
import { Modal } from '@/shared/ui/Modal';
import { TextBox } from '@/shared/ui/TextBox';
import {
    getPasswordComplexity,
    validationSchema,
} from '@/widgets/forms/model/validations/registerValidation';

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
    StyledSocials,
    StyledTitle,
} from './styled';

export const RegisterForm = () => {
    const { active, handleCloseForm } = useInitForm(Forms.REGISTER);

    const [register, { isLoading, isSuccess, isError, error }] =
        useRegisterMutation();

    const createQueryPath = useCreateQueryPath();
    const switchForm = useSwitchForm();

    const [currentRequest, setCurrentRequest] = useState<{
        abort: () => void;
    } | null>(null);
    const onSubmit = useCallback(
        (values: RegisterRequest) => {
            if (currentRequest) currentRequest.abort();
            const request = register(values);
            setCurrentRequest(request);
        },
        [currentRequest, register],
    );

    useEffect(() => {
        if (!active) return;
        if (isSuccess) {
            toastSuccess(Notice.REGISTRATION_SUCCESSFUL);
            switchForm(Forms.LOGIN);
        } else if (isError && ErrorUtils.isTypedError(error)) {
            toastError(error.data.message);
        } else if (isError) toastError(Notice.UNEXPECTED_ERROR);
    }, [active, error, isError, isSuccess, switchForm]);

    useEffect(
        () => () => {
            if (currentRequest) currentRequest.abort();
        },
        [currentRequest],
    );

    const isAuth = useAppSelector(selectIsAuth);
    const t = useTranslations('register');

    if (isAuth) return null;

    return (
        <AnimatePresence>
            {active && (
                <Modal
                    topElement={
                        <StyledTitle className={inriaSansFont.className}>
                            {t('title')} <span>{t('subtitle')}</span>
                        </StyledTitle>
                    }
                    onClose={handleCloseForm}
                >
                    {isLoading && (
                        <StyledLoader>
                            <Loader color={Colors.ORANGE} />
                        </StyledLoader>
                    )}
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
                        {({ errors, touched, values }) => (
                            <StyledBody className={poppinsFont.className}>
                                <Form>
                                    <TextBox
                                        name="name"
                                        icon={AccountIcon}
                                        placeholder={t('namePlaceholder')}
                                        type="text"
                                    />
                                    <StyledErrorText>
                                        {touched.name && errors.name}
                                    </StyledErrorText>

                                    <TextBox
                                        name="surname"
                                        icon={GroupIcon}
                                        placeholder={t('surnamePlaceholder')}
                                        type="text"
                                    />
                                    <StyledErrorText>
                                        {touched.surname && errors.surname}
                                    </StyledErrorText>

                                    <TextBox
                                        name="email"
                                        icon={EmailIcon}
                                        placeholder={t('emailPlaceholder')}
                                        type="email"
                                    />
                                    <StyledErrorText>
                                        {touched.email && errors.email}
                                    </StyledErrorText>

                                    <TextBox
                                        name="password"
                                        icon={PasswordIcon}
                                        placeholder={t('passwordPlaceholder')}
                                        type="password"
                                    />
                                    <StyledPasswordComplexity
                                        min="0"
                                        low={33}
                                        high={66}
                                        optimum={100}
                                        max={100}
                                        value={getPasswordComplexity(
                                            values.password,
                                        )}
                                    />
                                    <StyledErrorText>
                                        {touched.password && errors.password}
                                    </StyledErrorText>

                                    <StyledAuthBlock>
                                        <Button type="submit">
                                            {t('register')}
                                        </Button>
                                        <StyledSocials>
                                            <GoogleLoginButton />
                                            <FacebookLoginButton />
                                            <GithubLoginButton />
                                        </StyledSocials>
                                        <StyledBottomText
                                            className={inriaSansFont.className}
                                        >
                                            {t('subtext')}{' '}
                                            <Link
                                                href={createQueryPath(
                                                    'form',
                                                    Forms.LOGIN,
                                                )}
                                            >
                                                {t('clickableSubtext')}
                                            </Link>
                                        </StyledBottomText>
                                    </StyledAuthBlock>
                                </Form>
                            </StyledBody>
                        )}
                    </Formik>
                </Modal>
            )}
        </AnimatePresence>
    );
};
