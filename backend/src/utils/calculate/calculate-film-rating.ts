import { FilmsEntity } from '../../modules/films/films.entity';

export const calculateFilmRating = (ratings: FilmsEntity['ratings']) => {
    return ratings.length < 1
        ? 0
        : Math.floor(
              (ratings.reduce((acc, { rate }) => acc + rate, 0) /
                  ratings.length) *
                  10,
          ) / 10;
};
