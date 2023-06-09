import React from "react";
import { Container } from "react-bootstrap";

function Map() {
    return(
        <Container className="mt-5" style={{ textAlign: "center" }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.4482399603594!2d-68.84085262461181!3d-32.886315168843446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e091ed2dd83f7%3A0xf41c7ab7e3522157!2sAv.%20San%20Mart%C3%ADn%20%26%20Av.%20Las%20Heras%2C%20Capital%2C%20Mendoza!5e0!3m2!1ses!2sar!4v1681390487556!5m2!1ses!2sar" 
                width="600" 
                height="450" 
                style={{ border: 0 }}
                loading="lazy">
            </iframe>
        </Container>
    );
}

export default Map;