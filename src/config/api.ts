import axios from "axios";

const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL })

api.interceptors.request.use((request) => {
    request.headers.Authorization = `Client-ID ${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`

    return request;
})

export default api