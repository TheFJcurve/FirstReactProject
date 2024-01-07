import APIClient from "./apiClient";
import { Genre } from "./genreServices";
import { Platform } from "./platformServices";
import { Publisher } from "./publisherServices";

export interface Game {
    id: number;
    name: string;
    slug: string;
    background_image: string;
    parent_platforms:{ platform : Platform}[]
    metacritic: number;
    description_raw: string;
    genres: Genre[];
    publishers: Publisher[];
}

const gameServices = new APIClient<Game>('/games');

export default gameServices;