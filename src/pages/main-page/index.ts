import { lazy } from "react";

export const MainLazyPage = lazy(() => import("./main-page").then((module) => ({
    default: module.MainPage
})))