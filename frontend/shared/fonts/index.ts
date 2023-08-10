import {
    Inria_Sans, Inter, Nunito_Sans, Poppins,
} from 'next/font/google';

export const poppinsFont = Poppins({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
});

export const nunitoSansFont = Nunito_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
});

export const inriaSansFont = Inria_Sans({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
});

export const interFont = Inter({
    subsets: ['latin'],
    weight: ['400', '700'],
});
