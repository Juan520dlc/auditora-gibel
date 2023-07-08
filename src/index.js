import React from "react";
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
    Outlet,
} from "react-router-dom";
import Inicio from "./Rutas/Inicio";
import Nosotros from "./Rutas/Nosotros";
import Navbar from "./componentes/Navbar";
import PaginaError from "./Rutas/PaginaError";
import Contacto from "./Rutas/Contacto";
import Registro from "./Rutas/Registro";
import InicioSesion from "./Rutas/InicioSesion";

import "./App.css"

const AppLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

const router = createBrowserRouter([
    {
        element: <AppLayout />,
        errorElement: <PaginaError />,
        children: [
            {
                path: "/",
                element: <Inicio />
            },
            {
                path: "nosotros",
                element: <Nosotros />,
            },
            {
                path: "contacto",
                element: <Contacto />,
            },
            {
                path: "registro",
                element: <Registro />,
            },
            {
                path: "inicioSesion",
                element: <InicioSesion />,
            },
        ],
    },
]);

createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);