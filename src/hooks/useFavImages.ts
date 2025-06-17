import { useEffect, useState } from "react"
import type { SearchImage } from "../models"
import { api } from "../config"
import { AxiosError } from "axios"

export const useFavImages = () => {
    const [favImages, setFavImages] = useState<SearchImage[] | null>(null)

    useEffect(() => {
        api.get("/users/me/likes").then<SearchImage[]>((response) => {
            setFavImages(response.data)
            return response.data
        }).catch((err) => {
            if(err instanceof AxiosError) {
                console.error(err)
            }
        })
    }, [])

    return {
        favImages
    }
}