import React from 'react';
import { Link } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";
import Instrumento from "../../model/Instrumento";
import { URL_DETALLE_INSTRUMENTO } from '../../constants/constants';

function ItemInstrumento(props: Instrumento): JSX.Element {
    return(
        <Card style={{ width: "75%" }} className="mx-auto" key={props.id}>
            <Row>
                <Col style={{ textAlign: "center" }}>
                    <Link to={`${URL_DETALLE_INSTRUMENTO}/${props.id}`}>
                        <Card.Img src={props.imagenUrl} className="card-img-item" />
                    </Link>
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title>
                            { props.instrumento }
                        </Card.Title>
                        <Card.Text>
                            <strong>${ props.precio }</strong>
                        </Card.Text>
                        <Card.Text>
                            <span><i className="bi bi-truck"></i></span>
                            {
                                props.costoEnvio === 0 
                                ? 
                                <h6 className="costo-envio-gratis">Envío gratis a todo el país</h6>
                                : 
                                <h6 className="costo-envio">Costo de Envío Interior de Argentina: ${ props.costoEnvio }</h6>
                            }
                        </Card.Text>
                        <Card.Text>
                            { props.cantidadVendida } vendidos
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    );
}

export default ItemInstrumento;