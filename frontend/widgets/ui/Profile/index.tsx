'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import {
    useCallback, useEffect, useRef, useState,
} from 'react';

import { slideRight } from '@/shared/lib/animations/slideRight';
import { Urls } from '@/shared/config/constants/Urls';
import { Forms } from '@/shared/config/constants/Forms';
import { poppinsFont } from 'shared/lib/fonts';
import { useAppSelector } from '@/shared/lib/hooks/redux-hooks';
import { useActions } from '@/shared/lib/hooks/useActions';
import { useCreateQueryPath } from '@/shared/lib/hooks/useCreateQueryPath';
import { selectAuth } from '@/shared/model/store/selectors/auth.selectors';
import {
    StyledAvatar,
    StyledHugeCapitalize,
    StyledProfile, StyledProfileButtons,
    StyledProfileHeader,
    StyledProfileInfo,
    StyledRightArrow, StyledSmallUpperCase,
} from '@/widgets/ui/Profile/styled';

import PersonIcon from './images/person.svg';

type Props = {
    onClose: () => void
};

export const Profile = ({ onClose }: Props) => {
    const {
        id,
        name,
        surname,
        sex,
        avatar,
    } = useAppSelector(selectAuth);

    const { logout } = useActions();
    const handleLogout = useCallback(() => {
        logout();
    }, [logout]);
    const createQueryPath = useCreateQueryPath();

    const ref = useRef<Element | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        ref.current = document.querySelector<HTMLElement>('#side-menu');
        setMounted(true);
    }, []);

    const t = useTranslations('profile');

    return ((mounted && ref.current)
        ? (
            <StyledProfile
                className={poppinsFont.className}
                variants={slideRight}
                initial="hidden"
                animate="open"
                exit="hidden"
            >
                <StyledProfileHeader>
                    <StyledRightArrow onClick={onClose}/>
                    {t('userProfile')}
                </StyledProfileHeader>
                <StyledAvatar
                    src={avatar ? `${Urls.BASE_URL}/${avatar}` : PersonIcon}
                    alt="person"
                    width={250}
                    height={250}
                />
                <StyledProfileInfo>
                    <StyledHugeCapitalize>{name} {surname}</StyledHugeCapitalize>
                    <StyledSmallUpperCase>USER ID: {id}</StyledSmallUpperCase>
                    <StyledSmallUpperCase>{sex ?? ''}</StyledSmallUpperCase>
                </StyledProfileInfo>
                <StyledProfileButtons>
                    <Link href={createQueryPath('form', Forms.EDIT_PROFILE)}>{t('edit')}</Link>
                    <Link href={createQueryPath('form', Forms.SETTINGS)}>{t('settings')}</Link>
                    <button onClick={handleLogout} type="button">{t('logOut')}</button>
                </StyledProfileButtons>
            </StyledProfile>
        ) : null
    );
};
