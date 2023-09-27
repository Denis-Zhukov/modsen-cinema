'use client';

import { Field, Formik } from 'formik';
import { useTranslations } from 'next-intl';
import React, { useCallback, useEffect } from 'react';
import { BsFillSendFill } from 'react-icons/bs';

import { Notice } from '@/shared/config/constants/Notice';
import { ErrorUtils } from '@/shared/lib/utils/ErrorUtils';
import { toastError, toastSuccess } from '@/shared/lib/utils/ToastUtils';
import { useSubscribeMutation } from '@/shared/model/store/rtk/subscribe.rtk';

import { validationSchema } from '../../model/validations';
import { StyledHeadTitle, StyledInput, StyledSubscribe } from './styled';

export const Subscribe = () => {
    const [subscribe, {
        isSuccess,
        error,
    }] = useSubscribeMutation();

    const handleSubmit = useCallback(({ email }: { email: string }) => {
        subscribe({ email });
    }, [subscribe]);

    useEffect(() => {
        if (isSuccess) {
            toastSuccess(Notice.SUBSCRIBED);
        } else if (error) {
            if (ErrorUtils.isTypedError(error)) {
                toastError(error.data.message);
            } else {
                toastError(Notice.UNEXPECTED_ERROR);
            }
        }
    }, [error, isSuccess]);

    const t = useTranslations('subscribe');

    return (
        <Formik
            initialValues={{ email: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            {({
                touched,
                errors,
            }) => (
                <StyledSubscribe>
                    <StyledHeadTitle>
                        <h2>{t('title')}</h2>
                        <p>{touched.email && errors.email}</p>
                    </StyledHeadTitle>
                    <StyledInput>
                        <Field name="email" type="text" placeholder={t('placeholder')}/>
                        <button type="submit"><BsFillSendFill/></button>
                    </StyledInput>
                    <p>{t('subtext')}</p>
                </StyledSubscribe>
            )}
        </Formik>
    );
};
