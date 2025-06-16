import { api } from "../../config"
import type { SearchImageResponse } from "../../models";

export const action = async ({ request } : { request: Request }) => {
    const formData = await request.formData()
    const search = formData.get("search");

    const response = await api.get<SearchImageResponse>(`/search/photos?query=${search}&page=1&per_page-8`)

    return response.data;
}