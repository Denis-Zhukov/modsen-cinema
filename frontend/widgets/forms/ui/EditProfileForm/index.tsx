'use client';

import { Formik } from 'formik';
import { useTranslations } from 'next-intl';
import {
    ChangeEvent, useCallback, useEffect, useRef,
} from 'react';

import { Forms } from '@/shared/config/constants/Forms';
import { Notice } from '@/shared/config/constants/Notice';
import { poppinsFont } from '@/shared/lib/fonts';
import { useAppSelector } from '@/shared/lib/hooks/redux-hooks';
import { useInitForm } from '@/shared/lib/hooks/useInitForm';
import { toastSuccess } from '@/shared/lib/utils/toast';
import { useUpdateProfileMutation } from '@/shared/model/store/rtk/user.rtk';
import { selectAuth } from '@/shared/model/store/selectors/auth.selectors';
import { Modal } from '@/shared/ui/Modal';

import {
    StyledField,
    StyledForm, StyledInputFile,
    StyledRow,
    StyledSubmitButton,
    StyledTitle,
} from './styled';

export const EditProfileForm = () => {
    const {
        active,
        handleCloseForm,
    } = useInitForm(Forms.EDIT_PROFILE);

    const {
        isAuth,
        name,
        surname,
        sex,
    } = useAppSelector(selectAuth);

    const [updateProfile, { isSuccess }] = useUpdateProfileMutation();

    const avatarRef = useRef<File | null>(null);

    useEffect(() => {
        if (isSuccess) toastSuccess(Notice.UPDATE_SUCCESSFUL);
    }, [isSuccess]);

    const handleSubmit = useCallback((values: {
        name: string,
        surname: string,
        sex: string,
        password: string,
    }) => {
        const data = new FormData();
        if (avatarRef.current) {
            data.append('avatar', avatarRef.current);
        }
        data.append('surname', values.surname);
        data.append('name', values.name);
        data.append('sex', values.sex);
        data.append('newPassword', values.password);
        updateProfile(data);
    }, [updateProfile]);

    const handleAvatar = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        avatarRef.current = e.currentTarget.files![0];
    }, []);

    const t = useTranslations('edit');

    if (!isAuth) return null;

    return active && (
        <Modal onClose={handleCloseForm}>
            <Formik
                initialValues={{
                    name: name ?? '',
                    surname: surname ?? '',
                    sex: sex ?? '',
                    password: '',
                }}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue }) => (
                    <StyledForm className={poppinsFont.className}>
                        <StyledRow>
                            <StyledTitle>{t('avatar')}</StyledTitle>
                            <StyledInputFile
                                type="file"
                                name="avatar"
                                accept="image/*"
                                onChange={handleAvatar}
                            />
                        </StyledRow>
                        <StyledRow>
                            <StyledTitle>{t('name')}</StyledTitle>
                            <StyledField type="text" name="name"/>
                        </StyledRow>
                        <StyledRow>
                            <StyledTitle>{t('surname')}</StyledTitle>
                            <StyledField type="text" name="surname"/>
                        </StyledRow>
                        <StyledRow>
                            <StyledTitle>{t('sex')}</StyledTitle>
                            <StyledField
                                as="select"
                                name="sex"
                                onChange={(e) => setFieldValue('sex', e.target.value)}
                            >
                                <option value="male">{t('male')}</option>
                                <option value="female">{t('female')}</option>
                            </StyledField>
                        </StyledRow>
                        <StyledRow>
                            <StyledTitle>{t('password')}</StyledTitle>
                            <StyledField type="password" name="password"/>
                        </StyledRow>
                        <StyledSubmitButton type="submit">{t('save')}</StyledSubmitButton>
                    </StyledForm>
                )}
            </Formik>
        </Modal>
    );
};
