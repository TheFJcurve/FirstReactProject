import APIClient from "./apiClient";
import { Platform } from "./platformServices";

export interface Game {
    id: number;
    name: string;
    slug: string;
    background_image: string;
    parent_platforms: { platform: Platform }[]
    metacritic: number;
    description_raw: string;
} 


const gameServices = new APIClient<Game>('/games');

export default gameServices;