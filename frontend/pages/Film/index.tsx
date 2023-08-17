import { ReviewCard } from '@/features/ReviewCard';
import { StyledBackground, StyledReviews, StyledTrailerBlock } from '@/pages/Film/styled';
import { poppinsFont } from '@/shared/fonts';
import { getMainColors } from '@/shared/lib/get-main-colors';
import { VideoPlayer } from '@/shared/ui/VideoPlayer';
import { FilmInfo } from '@/widgets/ui/FilmInfo';

type Props = {
    params: { id: string }
};

export const Film = async ({ params: { id } }: Props) => {
    console.log(id);
    const img = 'http://localhost:3000/film.png';
    const [firstColor, secondColor] = await getMainColors(img, 2);

    return (
        <StyledBackground $firstColor={firstColor} $secondColor={secondColor}>
            <FilmInfo
                name="Black Panther: Wakanda Forever"
                year={2022}
                country="USA"
                genre="New / Action / Adventure / Fantasy"
                author="Ryan Googler"
                actors={['Arthur Fleck', 'Sophie Dumond', 'Penny Fleck', "Lupita Nyong'o", 'Letitia Wright']}
                image={img}
            />
            <StyledTrailerBlock>
                <h2 className={poppinsFont.className}>Watch trailer online!</h2>
                <VideoPlayer
                    src="http://localhost:8000/static/films/moj-klassnyj-betmen/trailer.mp4"
                />
            </StyledTrailerBlock>
            <StyledReviews>
                <ReviewCard
                    author="Stanislav Lebedyantsev"
                    body="I was a person that saw all the hype and claims of masterpiece as overreacting and overblown excitement for another Joker based film. I thought this looked solid at best and even a bit too pretentious in the trailer, but in here to say I was incredibly wrong. This is a massive achievement of cinema that's extremely rare in a day and age of cgi nonsense and reboots. While this is so..."
                    readMorePath="/"
                />
                <ReviewCard
                    author="Stanislav Lebedyantsev"
                    body="I was a person that saw all the hype and claims of masterpiece as overreacting and overblown excitement for another Joker based film. I thought this looked solid at best and even a bit too pretentious in the trailer, but in here to say I was incredibly wrong. This is a massive achievement of cinema that's extremely rare in a day and age of cgi nonsense and reboots. While this is so..."
                    readMorePath="/"
                />
                <ReviewCard
                    author="Stanislav Lebedyantsev"
                    body="I was a person that saw all the hype and claims of masterpiece as overreacting and overblown excitement for another Joker based film. I thought this looked solid at best and even a bit too pretentious in the trailer, but in here to say I was incredibly wrong. This is a massive achievement of cinema that's extremely rare in a day and age of cgi nonsense and reboots. While this is so..."
                    readMorePath="/"
                />
            </StyledReviews>
        </StyledBackground>
    );
};
