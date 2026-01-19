import { FormasPagamentos } from "./FormasPagamentos";

export function PagamentosSetup(){
    return (
        <>  
        <div className="w-full h-min bg-[#1f2020]">
          <div className="pt-20">
              <h1 className="text-white text-center  font-bold text-5xl" >Conheça do nossos Planos</h1>
              <h3 className="text-white text-center text-[20px] pt-5">Escolha um plano Premium e ouça música sem anúncios <br /> de forma ilimitada, alto-falantes e em outros dispositivos.<br /> Vários métodos de pagamento. Cancele quando quiser.</h3>
          </div>
          <div className="flex justify-center gap-10 pt-20">
            <FormasPagamentos />
          </div>
        </div>
        </>
    )
}