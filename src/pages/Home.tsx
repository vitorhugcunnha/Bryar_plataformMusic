import {planos} from "../data/planos.ts";
import NavBar from "../components/general/NavBar";
import { TableRow } from "../components/TableRow";
import { MenuHome } from "../components/MenuHome";
import { FormasPagamentos } from "../components/FormasPagametos";
import { PlanosSuper } from "../components/PlanosSuper";
import { FooterHome } from "../components/FooterHome";

export default function Home() {
   
  return (
    <>
      <NavBar />
      <main>
        <MenuHome />
        <div className="w-full justify-center flex h-min bg-[#1f2020]">
          <div className="flex gap-10">
            <div>
              <h1 className="text-white text-center  font-bold text-5xl" >Conheça do nossos limites</h1>
              <h2 className="text-white text-center  font-bold text-2xl pt-5">Com o Plano Super você pode ir além, pague e</h2>
              <h2 className="text-white text-center font-bold text-2xl">Tenha total controle sobre sua rotina.</h2>
              <div className="flex justify-center">
                <div>
                  <table>
                    <TableRow isTop/>
                    <TableRow text="Músicas sem anúncios"/>
                    <TableRow text="Ouvir Offline"/>
                    <TableRow text="Ouvir com os amigos em tempo real."/>
                    <TableRow text="Qualidade de aúdio alta."/>
                    <TableRow text="Baixar músicas."/>
                    <TableRow text="Ouvir na ordem que você que você quiser."/>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-min bg-[#1f2020]">
          <div className="pt-20">
              <h1 className="text-white text-center  font-bold text-5xl" >Conheça do nossos Planos</h1>
              <h3 className="text-white text-center text-[20px] pt-5">Escolha um plano Premium e ouça música sem anúncios <br /> de forma ilimitada, alto-falantes e em outros dispositivos.<br /> Vários métodos de pagamento. Cancele quando quiser.</h3>
          </div>
          <div className="flex justify-center gap-10 pt-20">
            <FormasPagamentos />
          </div>
        </div>
        <div>
          <div className="w-full h-min bg-[#1f2020]">
            <div className="flex items-center justify-center pb-20 pt-20">
                <h1 className="text-white font-bold text-4xl pt-5">Planos Super</h1>
            </div>
          </div>
            <div className="w-full bg-[#1f2020] flex justify-evenly">
              <div className="max-w-7xl flex flex-col md:flex-row gap-8 px-8 mb-32">
                {planos.map((plano, index) => (
                  <PlanosSuper
                    key={index}
                    plan={plano}/>
                ))}
              </div>
            </div>
            <div className="w-full h-min bg-[#000000]">
              <footer className="flex justify-evenly items-center h-32">
                <FooterHome />
              </footer>
            </div>
        </div>
      </main>
    </>
  );
}
