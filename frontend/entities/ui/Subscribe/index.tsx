'use client';

import { Field, Formik } from 'formik';
import React, { useCallback, useEffect } from 'react';
import { BsFillSendFill } from 'react-icons/bs';

import { toastError, toastSuccess } from '@/shared/lib/toast';
import { useSubscribeMutation } from '@/shared/store/rtk/subscribe.rtk';
import { Notice } from '@/shared/typing/constants/Notice';
import { isTypedError } from '@/shared/typing/guards/isTypedError';

import { StyledHeadTitle, StyledInput, StyledSubscribe } from './styled';
import { validationSchema } from './validations';

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
            if (isTypedError(error)) {
                toastError(error.data.message);
            } else {
                toastError(Notice.UNEXPECTED_ERROR);
            }
        }
    }, [error, isSuccess]);

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
                        <h2>Subscribe</h2>
                        <p>{touched.email && errors.email}</p>
                    </StyledHeadTitle>
                    <StyledInput>
                        <Field name="email" type="text" placeholder="Enter email"/>
                        <button type="submit"><BsFillSendFill/></button>
                    </StyledInput>
                    <p>Join our newsletter to stay up to date on features and releases</p>
                </StyledSubscribe>
            )}
        </Formik>
    );
};
