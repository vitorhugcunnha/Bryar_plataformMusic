import { useParams, Navigate } from "react-router-dom";
import { planos } from "../data/planos";
import { MenuPlanos } from "../components/MenuPlanos";

export default function Planos(){
    const { tipo_plano } = useParams();

    const plano = planos.find((p) => p.link === `/planos/${tipo_plano}`);

    if (!plano) {
        return <Navigate to="/home" replace/>;
    }

    return(
        <>
            <MenuPlanos />
        </>
    )
}