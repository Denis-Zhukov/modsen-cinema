'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
    useCallback, useEffect, useRef, useState,
} from 'react';

import { slideRight } from '@/shared/animations/slideRight';
import { Urls } from '@/shared/api/Urls';
import { Forms } from '@/shared/constants/Forms';
import { poppinsFont } from '@/shared/fonts';
import { useAppSelector } from '@/shared/hooks/redux-hooks';
import { useActions } from '@/shared/hooks/useActions';
import { useCreateQueryPath } from '@/shared/hooks/useCreateQueryPath';
import { selectAuth } from '@/shared/store/selectors/auth.selectors';
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
                    User profile
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
                    <Link href={createQueryPath('form', Forms.EDIT_PROFILE)}>Edit Profile</Link>
                    <Link href={createQueryPath('form', Forms.SETTINGS)}>Settings</Link>
                    <button onClick={handleLogout} type="button">Log out</button>
                </StyledProfileButtons>
            </StyledProfile>
        ) : null
    );
};
