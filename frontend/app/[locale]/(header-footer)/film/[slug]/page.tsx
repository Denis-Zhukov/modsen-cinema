import { Suspense } from 'react';

import { Film } from '@/pages/films';
import { FilmService } from '@/shared/api/services/FilmService';

import Loading from './loading';

type Props = {
    params: { slug: string }
};

const FilmPage = (props: any) => <Suspense fallback={<Loading/>}><Film {...props}/></Suspense>;
export default FilmPage;

export const generateMetadata = async ({ params: { slug } }: Props) => {
    try {
        const { data } = await FilmService.getFilm(slug);
        return { title: `${data.name} - Monema` };
    } catch (e) {
        return { title: 'Unloaded - Monema' };
    }
};
