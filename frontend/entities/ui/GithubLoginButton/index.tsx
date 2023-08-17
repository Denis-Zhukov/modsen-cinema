export const GithubLoginButton = () => {
    const githubLogin = async () => {
        try {
            window.open('http://localhost:8000/api/auth/github', '_self');
        } catch (ex) {
            alert(ex);
        }
    };

    return (<button type="button" onClick={githubLogin}>AUTH GITHUB</button>);
};
