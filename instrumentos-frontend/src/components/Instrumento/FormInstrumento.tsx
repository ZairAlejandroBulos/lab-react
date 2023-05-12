import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Form, Button, Container, Alert } from "react-bootstrap";

import { useAlert } from "../../hooks/useAlert";
import { useInstrumento } from "../../hooks/useInstrumento";
import { isValidInstrumento, generateImageName } from "../../util/InstrumentoUtil";
import { URL_GRILLA_INSTRUMENTO } from "../../constants/constants";
import { saveImageInstrumento, saveInstrumento, updateInstrumento } from "../../services/InstrumentoService";

function FormInstrumento(): JSX.Element {
    const navigate = useNavigate();
    const { id } = useParams<string>();
    const { instrumento } = useInstrumento(id);
    const { showAlert, handleAlert } = useAlert();
    const [message, setMessage] = useState<string>();
    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleImageChange =  (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setImageFile(event.target.files[0]);
        }
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (isValidInstrumento(instrumento) && imageFile) {
            if (instrumento.id === 0) {
                const imageName = generateImageName();

                instrumento.imagen = imageName;
                await saveInstrumento(instrumento);
                await saveImageInstrumento(imageFile, imageName);
            } else {
                await updateInstrumento(instrumento.id, instrumento);
            }
            
            navigate(`${URL_GRILLA_INSTRUMENTO}`);
        } else {
            setMessage("Debe llenar todos los campos");
            handleAlert();
        }

    };

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <h1>
                    Formulario Instrumento
                </h1>

                <Form.Group className="mb-3">
                    <Form.Label>Instrumento</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Instrumento"
                        defaultValue={instrumento?.instrumento}
                        onChange={e => instrumento.instrumento = String(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Marca</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Marca"
                        defaultValue={instrumento?.marca}
                        onChange={e => instrumento.marca = String(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Modelo</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Modelo"
                        defaultValue={instrumento?.modelo}
                        onChange={e => instrumento.modelo = String(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control
                        type="file"
                        onChange={handleImageChange}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Precio"
                        min={0}
                        defaultValue={instrumento?.precio}
                        onChange={e => instrumento.precio = Number(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Costo de Envio</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Costo de Envio"
                        min={0}
                        defaultValue={instrumento?.costoEnvio}
                        onChange={e => instrumento.costoEnvio = Number(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Cantidad vendida</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Cantidad vendida"
                        min={0}
                        defaultValue={instrumento?.cantidadVendida}
                        onChange={e => instrumento.cantidadVendida = Number(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control
                        as="textarea" rows={3}
                        placeholder="Descripción del Instrumento"
                        defaultValue={instrumento?.descripcion}
                        onChange={e => instrumento.descripcion = String(e.target.value)}
                    />
                </Form.Group>

                <Alert show={showAlert} onClick={handleAlert} variant="danger" dismissible>
                    <Alert.Heading>Error!</Alert.Heading>
                    <p>{ message }</p>
                </Alert>

                <Button onClick={() => navigate(`${URL_GRILLA_INSTRUMENTO}`)} variant="danger">
                    Cancelar
                </Button>
                <Button type="submit" variant="success">
                    Guardar
                </Button>
            </Form>
        </Container>
    );
}

export default FormInstrumento;