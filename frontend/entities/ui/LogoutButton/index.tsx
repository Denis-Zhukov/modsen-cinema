import { useCallback } from 'react';

import { useActions } from '@/shared/hooks/useActions';
import { Button } from '@/shared/ui/Button';

export const LogoutButton = () => {
    const { logout } = useActions();

    const onClick = useCallback(() => {
        logout();
    }, [logout]);

    return (
        <Button
            onClick={onClick}
            variant="primary"
        >
            Log out
        </Button>
    );
};
