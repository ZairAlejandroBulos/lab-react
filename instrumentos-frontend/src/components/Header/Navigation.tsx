import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import { URL_GRILLA_INSTRUMENTO, URL_HOME, URL_INSTRUMENTOS, URL_MAP } from '../../constants/constants';

function Navigation() {
    return(
        <Nav justify variant="tabs">
            <Nav.Item>
                <Nav.Link as={Link} to={`${URL_HOME}`}>
                    Home
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to={`${URL_MAP}`} eventKey="link-1">
                    Donde Estamos
                </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to={`${URL_INSTRUMENTOS}`} eventKey="link-2">
                    Instrumentos
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link as={Link} to={`${URL_GRILLA_INSTRUMENTO}`} eventKey="link-3">
                    Grilla Instrumentos
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default Navigation;