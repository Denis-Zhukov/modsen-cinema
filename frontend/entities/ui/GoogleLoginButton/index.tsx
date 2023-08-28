import { FcGoogle } from 'react-icons/fc';

import { StyledGoogleLoginButton } from '@/entities/ui/GoogleLoginButton/styled';
import { interFont } from "@/shared/fonts";

export const GoogleLoginButton = () => {
    const googleLogin = async () => {
        try {
            window.open('http://localhost:8000/api/auth/google', '_self');
        } catch (ex) {
            alert(ex);
        }
    };

    return (
        <StyledGoogleLoginButton type="button" onClick={googleLogin} className={interFont.className}>
            <FcGoogle/>
            Continue with Google
        </StyledGoogleLoginButton>
    );
};
