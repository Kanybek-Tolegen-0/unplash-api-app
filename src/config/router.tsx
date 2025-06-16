import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { mainLazyPage } from "../pages/main-page";
import { ImageLazyPage } from "../pages/image-page";
import { FavouritesLazyPage } from "../pages/favourites-page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <mainLazyPage.Component />,
                action: mainLazyPage.action
            },
            {
                path: ":id",
                element: <ImageLazyPage />
            },
            {
                path: "/favourites",
                element: <FavouritesLazyPage />
            }
        ]
    }
])