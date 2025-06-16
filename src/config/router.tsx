import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { MainLazyPage } from "../pages/main-page";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <MainLazyPage />
            }
        ]
    }
])