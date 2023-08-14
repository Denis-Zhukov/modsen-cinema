import * as yup from 'yup';

export const validationSchema = yup.object({
    email: yup.string()
        .required('Required')
        .email('Invalid email address'),
    password: yup.string()
        .required('Required')
        .min(4, 'The minimum password length is 4'),
});
