import { FaFacebook } from 'react-icons/fa';

import { StyledFacebookLoginButton } from '@/entities/ui/FacebookLoginButton/styled';

export const FacebookLoginButton = () => {
    const googleLogin = async () => {
        try {
            window.open('http://localhost:8000/api/auth/facebook', '_self');
        } catch (ex) {
            alert(ex);
        }
    };

    return (
        <StyledFacebookLoginButton type="button" onClick={googleLogin}>
            <FaFacebook/>
            Sign up with Facebook
        </StyledFacebookLoginButton>
    );
};
