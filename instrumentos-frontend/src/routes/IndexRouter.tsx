import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Map from "../components/Header/Map";
import Home from "../components/Header/Home";
import ListaInstrumentos from "../components/Instrumento/ListaIntrumentos";
import DetalleInstrumento from "../components/Instrumento/DetalleInstrumento";
import GrillaInstrumento from "../components/Instrumento/GrillaInstrumentos";
import FormInstrumento from "../components/Instrumento/FormInstrumento";
import {
    URL_MAP,
    URL_FORM_INSTRUMENTO,
    URL_GRILLA_INSTRUMENTO,
    URL_DETALLE_INSTRUMENTO,
    URL_HOME, URL_INSTRUMENTOS,
} from "../constants/constants";

function IndexRouter(): JSX.Element {
    return (
        <Routes>
            <Route path={`${URL_HOME}`} element={<Home />} />
            <Route path={`${URL_MAP}`} element={<Map />} />
            <Route path={`${URL_INSTRUMENTOS}`} element={<ListaInstrumentos />} />
            <Route path={`${URL_DETALLE_INSTRUMENTO}`} >
                <Route path=":id" element={<DetalleInstrumento />} />
            </Route>
            <Route path={`${URL_GRILLA_INSTRUMENTO}`} element={<GrillaInstrumento />} />
            <Route path={`${URL_FORM_INSTRUMENTO}`} >
                <Route path=":id"  element={<FormInstrumento />} />
            </Route>
        </Routes>
    );
}

export default IndexRouter;