import React from 'react';
import { ListGroup } from "react-bootstrap";

import ItemInstrumento from "./ItemInstrumento";
import Instrumento from "../../model/Instrumento";
import { useInstrumentos } from '../../hooks/useInstrumentos';

function ListaInstrumentos() {
    const { instrumentos } = useInstrumentos();

    return (
        <ListGroup>
            {
                instrumentos.map((item: Instrumento, index: number) =>
                    <ListGroup.Item key={index}>
                        <ItemInstrumento {...item} />
                    </ListGroup.Item>
                )
            }
        </ListGroup>
    );
}

export default ListaInstrumentos;