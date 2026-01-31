import { useParams, Navigate } from "react-router-dom";
import { planos } from "../data/planos";

export default function Planos(){
    const { tipo_plano } = useParams();

    const plano = planos.find((p) => p.link === `/planos/${tipo_plano}`);

    if (!plano) {
        return <Navigate to="/home" replace/>;
    }

    return(
        <>
            
        </>
    )
}