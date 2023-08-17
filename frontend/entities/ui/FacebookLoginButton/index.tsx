export const FacebookLoginButton = () => {
    const googleLogin = async () => {
        try {
            window.open('http://localhost:8000/api/auth/facebook', '_self');
        } catch (ex) {
            alert(ex);
        }
    };

    return (<button type="button" onClick={googleLogin}>AUTH FACEBOOK</button>);
};
