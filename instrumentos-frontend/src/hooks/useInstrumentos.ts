import { useEffect, useState } from "react";
import Instrumento from "../model/Instrumento";
import { getInstrumentosJSON } from "../services/InstrumentoService";

export function useInstrumentos() {
    const [instrumentos, setInstrumentos] = useState<Instrumento[]>([]);

    useEffect(() => {
        const getInstrumentos = async () => {
            const newInstrumentos = await getInstrumentosJSON();
            if (newInstrumentos) {
                setInstrumentos(newInstrumentos);
            }
        };

        getInstrumentos();        
    }, []);


    const handleSetInstrumentos = (newInstrumentos: Instrumento[]) => {
        setInstrumentos(newInstrumentos);
    };

    return { instrumentos, handleSetInstrumentos };
}