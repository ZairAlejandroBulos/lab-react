import { useEffect, useState } from "react";
import Instrumento from "../model/Instrumento";
import { getInstrumentoXId } from "../services/InstrumentoService";

export function useInstrumento(id: string | undefined) {
    const [instrumento, setInstrumento] = useState<Instrumento>(new Instrumento());
    let idInstrumento: number;

    useEffect(() => {
        const getInstrumento = async () => {
            if (id !== "0") {
                idInstrumento = Number(id);
                
                const newInstrumento = await getInstrumentoXId(idInstrumento);
                if (newInstrumento) {
                    setInstrumento(newInstrumento);
                }
            } else {
                return
            }
        };

        getInstrumento();
    }, [id]);

    return { instrumento };
}