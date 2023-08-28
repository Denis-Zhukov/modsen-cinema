import * as yup from 'yup';

export const validationSchema = yup.object({
    email: yup.string()
        .required('Must not be empty')
        .email('Invalid email address'),
});
