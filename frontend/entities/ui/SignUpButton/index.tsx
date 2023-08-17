import { NavButton } from '@/features/NavButton';
import { Forms } from '@/shared/constants/Forms';
import { useCreateQueryPath } from '@/shared/hooks/useCreateQueryPath';

export const SignUpButton = () => {
    const createQueryPath = useCreateQueryPath();

    return (
        <NavButton
            path={createQueryPath('form', Forms.REGISTER_FORM)}
            variant="primary"
        >
            Sign up
        </NavButton>
    );
};
