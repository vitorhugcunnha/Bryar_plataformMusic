import { Plan } from "../types/types";

interface PlanosSuperProps {
    plan: Plan
}   

export function PlanosSuper({ plan }: PlanosSuperProps) {
    return (
    <div className="w-full h-min bg-[#222426]">
        <div className="w-96 h-[620px] relative bg-[#363636] rounded-xl">
        <div className="w-60 h-11 rounded-tl-xl rounded-br-xl flex items-center justify-center" style={{backgroundColor : plan.bg_card}}>
            <img className="h-min w-24" src="src/assets/images/Logo.png" />
        </div>
            <div>
                <h1 className="font-bold text-4xl text-[#299F5E] pt-8 pl-4" style={{color : plan.color_text}}>{plan.nome_plano}</h1>
                <span className="text-white pl-4 font-bold">{plan.preco_text}</span>
            </div>
            <div className="pt-8">
                <div className="h-[0.2px] bg-white w-full"></div>
            </div>
            <div className="mt-6 pb-10 ml-8 font-bold">
                <ul className="list-disc space-y-1 text-white">
                    {plan.beneficios.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
                </ul>
            </div>
            <div>
                <div>
                    <button className="w-80 h-11 rounded-xl ml-8 font-bold text-white transition" 
                    style={{ backgroundColor: plan.bg_card }}
                    onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = plan.cor_hover)
                    }
                    onMouseOut={(e) =>
                        (e.currentTarget.style.backgroundColor = plan.bg_card)
                    }>{plan.text_oferta}</button>
                </div>
                <div>
                    <button className="w-80 h-11 border-[1px] rounded-xl mt-8 ml-8 font-bold text-white hover:bg-[#919090] border-white transition">Pagamento tradicional</button>
                </div>
            </div>
            <div className="flex justify-center mt-4">
                <p className="max-w-[260px] text-center text-[12px] underline text-zinc-400 leading-relaxed">
                Depois do teste grátis, a renovação do pagamento será normal com o preço padrão,
                então se não quiser pagar cancele antes de qualquer importunuo.
                </p>
            </div>
            <div className="absolute bottom-0 right-0 w-60 h-11 rounded-tl-xl rounded-br-xl flex items-center justify-center" style={{backgroundColor : plan.bg_card}}>
                <span className="text-white font-bold text-lg">{plan.text_oferta}</span>
            </div>
        </div>
    </div>
    )
}