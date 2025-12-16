export function  PlanosSuper() {
    return (
        <>
        <div className="w-full h-min bg-[#222426]">
            <div>
          <div className="w-96 h-[600px] relative bg-[#363636] rounded-xl ">
            <div className="w-60 h-11 bg-[#299F5E] rounded-tl-xl rounded-br-xl flex items-center justify-center">
                <img className="h-min w-24" src="src/assets/images/Logo.png" />
            </div>
                    <div>
                        <h1 className="font-bold text-4xl text-[#299F5E] pt-8 pl-4">Individual</h1>
                        <span className="text-white pl-4 font-bold">R$19.99/mês</span>
                    </div>
                    <div className="pt-8">
                        <div className="h-[0.2px] bg-white w-full"></div>
                    </div>
                    <div className="mt-6 ml-8 font-bold">
                        <ul className="list-disc space-y-1">
                            <li className="text-white">1 Conta Super</li>
                            <li className="text-white">Todos os benefícios do Super Individual</li>
                        </ul>
                    </div>
                    <div>
                        <div>
                            <button className="w-80 h-11 bg-[#299F5E] rounded-xl mt-14 ml-8 font-bold text-white hover:bg-[#227548] transition">Experimente 3 meses por $0</button>
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
                    <div className="absolute bottom-0 right-0 w-60 h-11 bg-[#299F5E] rounded-tl-xl rounded-br-xl flex items-center justify-center">
                        <span className="text-white font-bold text-lg">R$0 por 3 meses</span>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}