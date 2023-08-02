import { StyledBackgroundInner, StyledBackgroundOuter } from '@/pages/Film/styled';
import { getMainColors } from '@/shared/lib/getMainColors';
import { FilmInfo } from '@/widgets/ui/FilmInfo';

type Props = {
    params: { id: string }
};

export const Film = async ({ params: { id } }: Props) => {
    console.log(id);
    const img = 'http://localhost:3000/film.png';
    const [firstColor, secondColor] = await getMainColors(img, 2);

    return (
        <StyledBackgroundOuter firstColor={firstColor} secondColor={secondColor}>
            <StyledBackgroundInner>
                <FilmInfo
                    name="Black Panther: Wakanda Forever"
                    year={2022}
                    country="USA"
                    genre="New / Action / Adventure / Fantasy"
                    author="Ryan Googler"
                    actors={['Arthur Fleck', 'Sophie Dumond', 'Penny Fleck', "Lupita Nyong'o", 'Letitia Wright']}
                    image={img}
                />
            </StyledBackgroundInner>
        </StyledBackgroundOuter>
    );
};
