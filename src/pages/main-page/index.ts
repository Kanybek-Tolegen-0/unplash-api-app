import { lazy } from "react";
import { action } from "./action";

const MainLazyPage = lazy(() => import("./main-page").then((module) => ({
    default: module.MainPage
})))

export const mainLazyPage = {
    Component: MainLazyPage,
    action
}