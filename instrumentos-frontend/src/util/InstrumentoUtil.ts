import Instrumento from "../model/Instrumento";

export function isValidString(input: string): boolean {
    return input !== undefined || input !== "";
}

export function isValidNumber(input: number) {
    return input !== undefined || input > 0;
}

export function isValidInstrumento(instrumento: Instrumento): boolean {
    if (!isValidString(instrumento.instrumento)
        && !isValidString(instrumento.marca)
        && !isValidString(instrumento.modelo)
        && !isValidString(instrumento.imagen)
        && !isValidString(instrumento.descripcion)
        ) {
            return false;
        } else if(!isValidNumber(instrumento.precio)
        && !isValidNumber(instrumento.cantidadVendida)
        && !isValidNumber(instrumento.costoEnvio)
    ) {
        return false;
    }

    return true;
}

export function generateImageName(): string {
    const currentDateTime = new Date().toISOString().replace(/[-T:.]/g, ''); 
    return `${currentDateTime}.jpg`;
}