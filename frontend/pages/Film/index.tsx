import { Reviews } from '@/features/films';
import { FilmService } from '@/shared/api/services/FilmService';
import { Urls } from '@/shared/config/constants/Urls';
import { ColorUtils } from '@/shared/lib/utils/ColorUtils';
import { BookingBlock, FilmInfo, TrailerBlock } from '@/widgets/films';

import { StyledBackground } from './styled';

type Props = {
    params: { slug: string }
};

export const Film = async ({ params: { slug } }: Props) => {
    const { data } = await FilmService.getFilm(slug);
    const trailer = `${Urls.BASE_URL}/${data.trailer}`;
    const preview = `${Urls.BASE_URL}/${data.preview}`;

    const [firstColor, secondColor] = await ColorUtils.getMainColors(preview, 2);

    return (
        <StyledBackground $firstColor={firstColor} $secondColor={secondColor}>
            <FilmInfo
                rating={data.rating}
                name={data.name}
                year={data.release}
                country={data.country.name}
                genres={data.genres.map(({ name }) => name)}
                author={`${data.author.name} ${data.author.surname}`}
                actors={data.actors.map(({
                    name,
                    surname,
                }) => `${name} ${surname}`)}
                image={preview}
                description={data.description}
            />
            <BookingBlock filmId={data.id}/>
            <TrailerBlock trailer={trailer}/>
            <Reviews reviews={data.reviews}/>
        </StyledBackground>
    );
};
