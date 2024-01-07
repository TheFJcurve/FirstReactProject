import APIClient from "../services/apiClient";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

const platformServices = new APIClient<Platform>('/platforms/lists/parents');

export default platformServices;