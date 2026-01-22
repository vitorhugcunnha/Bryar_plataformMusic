import {TableRow} from "./TableRow";

export function TableSection() {
    return(
        <>
        <div className="w-full justify-center flex h-min bg-[#1f2020]">
              <div className="flex gap-10">
                <div>
                  <h1 className="text-white text-center  font-bold text-4xl" >Conheça do nossos limites</h1>
                  <h2 className="text-white text-center  font-bold text-1xl pt-5">Com o Plano Super você pode ir além, pague e</h2>
                  <h2 className="text-white text-center font-bold text-1xl">Tenha total controle sobre sua rotina.</h2>
                  <div className="flex justify-center">
                    <div>
                      <table>
                        <TableRow isTop/>
                        <TableRow text="Músicas sem anúncios"/>
                        <TableRow text="Ouvir Offline"/>
                        <TableRow text="Qualidade de aúdio"/>
                        <TableRow text="Baixar músicas."/>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}