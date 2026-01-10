export interface MovieDTO {
    id: number;
    title: string;
    rate: number;
    posterUrl?: string;
    backdropUrl?: string;
    voteAverage?: number;
    voteCount?: number;
    vote_count?: number;
    vote_average?: number;
    popularity?: number;
    overview?: string;
}