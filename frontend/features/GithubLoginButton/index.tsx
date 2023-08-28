import { useTranslations } from 'next-intl';
import { AiFillGithub } from 'react-icons/ai';

import { StyledGithubLoginButton } from '@/features/GithubLoginButton/styled';

export const GithubLoginButton = () => {
    const githubLogin = async () => {
        try {
            window.open('http://localhost:8000/api/auth/github', '_self');
        } catch (ex) {
            alert(ex);
        }
    };

    const t = useTranslations();

    return (
        <StyledGithubLoginButton type="button" onClick={githubLogin}>
            <AiFillGithub/>
            {t('githubAuth')}
        </StyledGithubLoginButton>
    );
};
