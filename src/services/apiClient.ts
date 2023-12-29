import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'ab0436bda1814b25b9ac0ec80a391cbb'
    }
})