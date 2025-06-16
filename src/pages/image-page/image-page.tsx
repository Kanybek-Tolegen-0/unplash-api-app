import { useLoaderData } from "react-router-dom"
import type { SearchImage } from "../../models";

export const ImagePage = () => {
    const loaderData = useLoaderData<SearchImage>();

return <>
        {loaderData ? <div></div> : null} 
    </>
}