import { lazy } from "react";
import { imageLoader } from "./loader";

export const imageLazyPage = {
    Component: lazy(() => import("./image-page").then((module) => ({default: module.ImagePage}))),
    loader: imageLoader
}

