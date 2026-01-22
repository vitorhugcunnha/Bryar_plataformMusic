import { PlanosSuper } from "./PlanosSuper"
import { planos } from "../data/planos";
import { Plan } from "../types/types";

export function SetupPlanosSuper() {
    return (
        <>
            <div className="w-full h-min bg-[#1f2020]">
                <div className="flex items-center justify-center pb-20 pt-20">
                    <h1 className="text-white font-bold text-4xl pt-5">Planos Super</h1>
                </div>
            </div>
            <div className="w-full bg-[#1f2020] flex justify-evenly">
                <div className="max-w-7xl flex flex-col md:flex-row gap-8 px-8 mb-32">
                    {planos.map((plano: Plan, index: number) => (
                        <PlanosSuper
                        key={index}
                        plan={plano}/>
                    ))}
                </div>
            </div>
        </>
    )
}