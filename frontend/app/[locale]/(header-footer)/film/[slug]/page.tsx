import { Film } from '@/pages/Film';
import { FilmService } from '@/shared/api/FilmService';

type Props = {
    params: { slug: string }
};

export const generateMetadata = async ({ params: { slug } }: Props) => {
    const { data } = await FilmService.getFilm(slug);
    return {
        title: `${data.name} - Monema`,
    };
};

export default Film;
