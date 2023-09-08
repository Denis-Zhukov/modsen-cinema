export interface FilmResponse {
    id: number;

    name: string;

    release: number;

    description: string;

    trailer: string;

    preview: string;

    trailerPath: string;

    previewPath: string;

    slug: string;

    rating: number;

    country: { name: string }

    genres: { name: string }[]

    author: { name: string, surname: string }

    actors: { name: string, surname: string }[]

    reviews: { user: { name: string, surname: string }, review: string, id: number }[]

    next: string

    available: boolean
}
