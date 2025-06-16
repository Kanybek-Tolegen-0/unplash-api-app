import type { LoaderFunctionArgs } from "react-router-dom"
import { api } from "../../config"
import { AxiosError } from "axios"

export const imageLoader = async ({ params }: LoaderFunctionArgs) => {
  const { id } = params
  if (!id) throw new Response("Photo ID is required", { status: 400 })

  try {
    const response = await api.get(`/photos/${id}`)
    return response.data
  } catch (error) {
      if(error instanceof AxiosError) {
        throw new Response("Photo not found", { status: 404 })
      }
  }
}