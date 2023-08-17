export const GoogleLoginButton = () => {
    const googleLogin = async () => {
        try {
            window.open('http://localhost:8000/api/auth/google', '_self');
        } catch (ex) {
            alert(ex);
        }
    };

    return (<button type="button" onClick={googleLogin}>AUTH GOOGLE</button>);
};
