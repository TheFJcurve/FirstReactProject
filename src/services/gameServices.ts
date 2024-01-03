import APIClient from "./apiClient";
import { Platform } from "./platformServices";

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[]
    metacritic: number;
} 


const gameServices = new APIClient<Game>('/games');

export default gameServices;