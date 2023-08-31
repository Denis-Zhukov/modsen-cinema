import { Film } from '@/pages/films';
import { FilmService } from '@/shared/api/services/FilmService';

type Props = {
    params: { slug: string }
};

const FilmPage = (props: any) => <Film {...props}/>;
export default FilmPage;

export const generateMetadata = async ({ params: { slug } }: Props) => {
    try {
        const { data } = await FilmService.getFilm(slug);
        return { title: `${data.name} - Monema` };
    } catch (e) {
        return { title: 'Unloaded - Monema' };
    }
};
