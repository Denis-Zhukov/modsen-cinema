import { ReviewCard } from '@/features/ReviewCard';
import { StyledBackground, StyledReviews, StyledTrailerBlock } from '@/pages/Film/styled';
import { FilmService } from '@/shared/api/FilmService';
import { Urls } from '@/shared/api/Urls';
import { poppinsFont } from '@/shared/fonts';
import { getMainColors } from '@/shared/lib/get-main-colors';
import { VideoPlayer } from '@/shared/ui/VideoPlayer';
import { BookingBlock } from '@/widgets/ui/BookingBlock';
import { FilmInfo } from '@/widgets/ui/FilmInfo';

type Props = {
    params: { slug: string }
};

export const Film = async ({ params: { slug } }: Props) => {
    const { data } = await FilmService.getFilm(slug);
    const trailer = `${Urls.BASE_URL}/${data.trailer}`;
    const preview = `${Urls.BASE_URL}/${data.preview}`;

    const [firstColor, secondColor] = await getMainColors(preview, 2);

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
            <StyledTrailerBlock>
                <h2 className={poppinsFont.className}>Watch trailer online!</h2>
                <VideoPlayer src={trailer}/>
            </StyledTrailerBlock>
            <StyledReviews>
                {data.reviews.map(({
                    id,
                    user,
                    review,
                }) => (
                    <ReviewCard
                        key={id}
                        author={`${user.name} ${user.surname}`}
                        body={review}
                    />
                ))}
            </StyledReviews>
        </StyledBackground>
    );
};
