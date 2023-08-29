import { useTranslations } from 'next-intl';
import { AiFillGithub } from 'react-icons/ai';

import { StyledGithubLoginButton } from '@/features/auth/ui/GithubLoginButton/styled';

import { githubLogin } from '../../model/github-login';

export const GithubLoginButton = () => {
    const t = useTranslations();

    return (
        <StyledGithubLoginButton type="button" onClick={githubLogin}>
            <AiFillGithub/>
            {t('githubAuth')}
        </StyledGithubLoginButton>
    );
};
