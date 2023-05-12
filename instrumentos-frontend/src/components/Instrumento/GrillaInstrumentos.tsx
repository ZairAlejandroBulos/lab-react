import React from "react";
import { Button, Container, Table } from "react-bootstrap";
import Instrumento from "../../model/Instrumento";
import { URL_FORM_INSTRUMENTO } from "../../constants/constants";
import { deleteInstrumento } from "../../services/InstrumentoService";
import { useInstrumentos } from "../../hooks/useInstrumentos";

function GrillaInstrumento(): JSX.Element {
    const { instrumentos, handleSetInstrumentos } = useInstrumentos();

    const handleDelete = async (id: number) => {
        await deleteInstrumento(id);
        const newInstrumentos = instrumentos.filter(item => item.id !== id);
        handleSetInstrumentos(newInstrumentos);
    };

    return(
        <>
            <Container>
                <h1>Intrumentos</h1>

                <Button href={`${URL_FORM_INSTRUMENTO}/0`} variant="success">Nuevo</Button>
            </Container>

            <Container>
                <Table responsive bordered hover>
                    <thead style={{ backgroundColor: "black", color: "white" }}>
                        <tr style={{ textAlign: "center" }}>
                            <th>#</th>
                            <th>Intrumento</th>
                            <th colSpan={2}>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            instrumentos.map((item: Instrumento, index: number) =>
                                <tr key={index}>
                                    <td>{ index+1 }</td>
                                    <td>{ item.instrumento }</td>
                                    <td style={{ textAlign: "center" }}>
                                        <Button href={`${URL_FORM_INSTRUMENTO}/${item.id}`} variant="warning">
                                            Editar
                                        </Button>
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        <Button onClick={() => handleDelete(item.id)} variant="danger">
                                            Eliminar
                                        </Button>
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </Container>
        </>
    );
}

export default GrillaInstrumento;