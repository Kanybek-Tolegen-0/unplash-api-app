import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { mainLazyPage } from "../pages/main-page";
import { imageLazyPage } from "../pages/image-page";
import { favouritesLazyPage } from "../pages/favourites-page";

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
                element: <imageLazyPage.Component />,
                loader: imageLazyPage.loader
            },
            {
                path: "/favourites",
                element: <favouritesLazyPage.Component />
            }
        ]
    }
])