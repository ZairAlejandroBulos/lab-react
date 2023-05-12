import React from 'react';
import { useParams } from 'react-router-dom';
import { useInstrumento } from "../../hooks/useInstrumento";
import { Button, Col, Container, Row } from "react-bootstrap";

function DetalleInstrumento() {
    const { id } = useParams<string>();
    const { instrumento } = useInstrumento(id);
    const classEnvio = instrumento?.costoEnvio !== 0 ? "costo-envio" : "costo-envio-gratis";

    return(
        <Container className="mt-5">
            <Row>
                <Col>
                    <Row>
                        <img src={instrumento.imagenUrl} alt="img-instrumento" className="img-detalle-item"/>
                    </Row>
                    <Row>
                        <p>
                            Descripción: <br/> 
                            { instrumento.descripcion }
                        </p>
                    </Row>
                </Col>
                <Col className="col-divisor">
                    <Row>
                        <h6 className="detalle-vendidos">{ instrumento.cantidadVendida } vendidos</h6>
                    </Row>
                    <Row>
                        <h2>{ instrumento.instrumento }</h2>
                    </Row>
                    <Row>
                        <h3>${ instrumento.precio }</h3>
                    </Row>
                    <Row>
                        <h4>Marca: { instrumento.marca }</h4>
                    </Row>
                    <Row>
                        <h4>Modelo:  {instrumento.modelo }</h4>
                    </Row>
                    <Row>
                        <h4>Costo Envío:</h4>
                    </Row>
                    <Row>
                        <h5 className={classEnvio}>
                            <span><i className="bi bi-truck"></i></span>
                            {
                                instrumento?.costoEnvio === 0
                                ? 
                                "Envio Gratis"
                                : 
                                <>
                                    "Interior de Argentina:"  ${ instrumento.costoEnvio }
                                </>
                            }
                        </h5>
                    </Row>
                    <Row>
                        <Button variant="outline-primary">
                            Agregar al carrito
                        </Button>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default DetalleInstrumento;