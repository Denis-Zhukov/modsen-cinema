import { Urls } from '@/shared/api/Urls';
import { RegisterRequest } from '@/shared/typing/api/requests/RegisterRequest';

export const fetchRegister = async (data: RegisterRequest) => {
    const response = await fetch(`${Urls.BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
    return response.json();
};
