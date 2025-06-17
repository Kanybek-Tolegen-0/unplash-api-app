import { useEffect, useState } from "react"
import type { SearchImage } from "../models"
import { api } from "../config"
import { AxiosError } from "axios"

export const useRandomImage = () => {
    const [randomImage, setRandomImage] = useState<SearchImage | null>(null)

    useEffect(() => {
        api.get("/photos/random").then<SearchImage>((response) => {
            setRandomImage(response.data)
            return response.data
        }).catch((err) => {
            if(err instanceof AxiosError) {
                console.error(err)
            }
        })
    }, [])

    return {
        randomImage
    }
}