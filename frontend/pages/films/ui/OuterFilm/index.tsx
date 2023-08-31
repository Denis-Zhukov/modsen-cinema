import { FilmService } from '@/shared/api/services/FilmService';
import { Urls } from '@/shared/config/constants/Urls';
import { ColorUtils } from '@/shared/lib/utils/ColorUtils';

import { InnerFilm } from '../InnerFilm';

type Props = {
    params: { slug: string }
};

export const OuterFilm = async ({ params: { slug } }: Props) => {
    const { data } = await FilmService.getFilm(slug);
    const trailer = `${Urls.BASE_URL}/${data.trailer}`;
    const preview = `${Urls.BASE_URL}/${data.preview}`;

    const [firstColor, secondColor] = await ColorUtils.getMainColors(preview, 2);

    return (
        <InnerFilm
            firstColor={firstColor}
            secondColor={secondColor}
            trailer={trailer}
            preview={preview}
            film={data}
        />
    );
};
