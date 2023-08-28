'use client';

import { Field, Form, Formik } from 'formik';
import { useCallback, useEffect, useRef } from 'react';

import {
    StyledForm,
    StyledRow,
    StyledSubmitButton,
    StyledTitle
} from '@/features/EditProfileForm/styled';
import { Forms } from '@/shared/constants/Forms';
import { useAppSelector } from '@/shared/hooks/redux-hooks';
import { useInitForm } from '@/shared/hooks/useInitForm';
import { toastSuccess } from '@/shared/lib/toast';
import { useUpdateProfileMutation } from '@/shared/store/rtk/user.rtk';
import { selectAuth } from '@/shared/store/selectors/auth.selectors';
import { Notice } from '@/shared/typing/constants/Notice';
import { Modal } from '@/shared/ui/Modal';
import { poppinsFont } from "@/shared/fonts";

export const EditProfileForm = () => {
    const {
        active,
        handleCloseForm,
    } = useInitForm(Forms.EDIT_PROFILE);

    const {
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
                <StyledForm className={poppinsFont.className}>
                    <StyledRow>
                        <StyledTitle>Файл</StyledTitle>
                        <input
                            type="file"
                            name="avatar"
                            accept="image/*"
                            onChange={(e) => avatarRef.current = e.currentTarget.files![0]}
                        />
                    </StyledRow>
                    <StyledRow>
                        <StyledTitle>Фамилия</StyledTitle>
                        <Field type="text" name="surname"/>
                    </StyledRow>
                    <StyledRow>
                        <StyledTitle>Имя</StyledTitle>
                        <Field type="text" name="name"/>
                    </StyledRow>
                    <StyledRow>
                        <StyledTitle>Пол</StyledTitle>
                        <Field as="select" name="sex">
                            <option value="">Unknown</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </Field>
                    </StyledRow>
                    <StyledRow>
                        <StyledTitle>Пароль</StyledTitle>
                        <Field type="password" name="password"/>
                    </StyledRow>
                    <StyledSubmitButton type="submit">Save</StyledSubmitButton>
                </StyledForm>
            </Formik>
        </Modal>
    );
};
