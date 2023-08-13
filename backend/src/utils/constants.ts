import * as path from 'path';

const publicRoute = path.resolve(path.resolve(), 'public');
export const paths = {
    publicRoute,
    filmsRoute: path.resolve(publicRoute, 'films'),
};
