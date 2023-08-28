import { AiFillGithub } from 'react-icons/ai';
import { StyledGithubLoginButton } from "@/entities/ui/GithubLoginButton/styled";

export const GithubLoginButton = () => {
    const githubLogin = async () => {
        try {
            window.open('http://localhost:8000/api/auth/github', '_self');
        } catch (ex) {
            alert(ex);
        }
    };

    return (
        <StyledGithubLoginButton type="button" onClick={githubLogin}>
            <AiFillGithub/>
            Sign up with GitHuB
        </StyledGithubLoginButton>
    );
};
