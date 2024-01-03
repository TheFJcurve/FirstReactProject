import APIClient from "./apiClient";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const genreServices = new APIClient<Genre>('/genres');

export default genreServices;