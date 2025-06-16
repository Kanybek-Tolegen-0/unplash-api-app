import { lazy } from "react";


export const favouritesLazyPage = {
    Component: lazy(() => import("./favourites-page").then((module) => ({ default: module.FavouritesPage})))
}