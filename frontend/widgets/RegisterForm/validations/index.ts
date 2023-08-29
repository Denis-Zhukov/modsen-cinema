import * as yup from 'yup';

export const validationSchema = yup.object({
    name: yup.string()
        .required('Required')
        .matches(/^[A-Z][a-z]+(?:-[A-Za-z]+)*$/, 'It doesn\'t look like a name'),
    surname: yup.string()
        .required('Required')
        .matches(/^[A-Z][a-z]+(?:-[A-Za-z]+)*$/, 'It doesn\'t look like a surname'),
    email: yup.string()
        .required('Required')
        .email('Invalid email address'),
    password: yup.string()
        .required('Required')
        .min(4, 'The minimum password length is 4'),
});

export const getPasswordComplexity = (value: string): number => {
    const hasUppercase = /[A-Z]/.test(value);
    const specSymbols = /[!@$#;~=*&-]/.test(value);
    if (value.length < 4) return 0;
    if (value.length <= 8 || !hasUppercase) return (value.length > 8 ? 5 : value.length - 3) * 6.5;
    if ((value.length >= 8 && value.length <= 12 && hasUppercase) || !specSymbols) return (value.length > 12 ? 10 : value.length - 3) * 6.5;
    if (value.length >= 12 && value.length <= 16 && hasUppercase && specSymbols) return (value.length - 2) * 6.7;
    return 100;
};
