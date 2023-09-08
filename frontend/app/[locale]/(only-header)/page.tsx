import { Suspense } from 'react';

import { Main } from '@/pages/main';

import Loading from './loading';

const MainPage = () => <Suspense fallback={<Loading/>}><Main/></Suspense>;
export default MainPage;

export const metadata = {
    title: 'Monema',
    description: '...',
};
