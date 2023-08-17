import { NavButton } from '@/features/NavButton';
import { Forms } from '@/shared/constants/Forms';
import { useCreateQueryPath } from '@/shared/hooks/useCreateQueryPath';

export const SignInButton = () => {
    const createQueryPath = useCreateQueryPath();

    return (
        <NavButton
            path={createQueryPath('form', Forms.LOGIN_FORM)}
            variant="secondary"
        >
            Sign in
        </NavButton>
    );
};
