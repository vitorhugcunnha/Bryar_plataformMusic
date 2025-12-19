import { useEffect } from "react";
import {planos} from "../data/planos.ts";
import TRUNK from "vanta/dist/vanta.trunk.min";
import * as THREE from "three";
import NavBar from "../components/general/NavBar";
import { TableRow } from "../components/TableRow";
import { FormasPagamentos } from "../components/FormasPagametos";
import { PlanosSuper } from "../components/PlanosSuper";

export default function Home() {
  useEffect(() => {
    TRUNK({
      el: "#vanta",
      THREE: THREE,
      backgroundColor: 0x222426,
      color: 0x98465f,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.00,
      minWidth: 200.00,
      scale: 1.00,
      scaleMobile: 1.00,
      spacing: 2.00,
      chaos: 4.00
    });
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <div id="vanta" className="w-full h-screen flex items-center justify-center">
          <div className="flex items-center justify-center gap-10">
            <div>
              <h1 className="text-white font-bold text-5xl">Seja Bem-vindo Bryar</h1>
              <h2 className="text-white font-bold text-4xl pt-5">Melhor plataforma de</h2>
              <h2 className="text-white font-bold text-4xl">música atualmente</h2>
              <span className="text-white text-lg pt-10">
                <p>Aproveite das melhores músicas, dos seus artistas favoritos</p>
                <p>em qualquer lugar e quando quiser.</p>
              </span>
            </div>
            <div>
              <img className="h-60 p-12 border shadow-2xs bg-gradient-to-b from-black via-[#98465f] to-red-900" src="src/assets/images/LogoBig.png" />
            </div>
          </div>
        </div>
        <div className="w-full justify-center flex h-min bg-[#222426]">
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
        <div className="w-full h-min bg-[#222426]">
          <div className="pt-20">
              <h1 className="text-white text-center  font-bold text-5xl" >Conheça do nossos Planos</h1>
              <h3 className="text-white text-center text-[20px] pt-5">Escolha um plano Premium e ouça música sem anúncios <br /> de forma ilimitada, alto-falantes e em outros dispositivos.<br /> Vários métodos de pagamento. Cancele quando quiser.</h3>
          </div>
          <div className="flex justify-center gap-10 pt-20">
            <FormasPagamentos />
          </div>
        </div>
        <div>
          <div className="w-full h-min bg-[#222426]">
            <div className="flex items-center justify-center pb-20 pt-20">
                <h1 className="text-white font-bold text-4xl pt-5">Planos Super</h1>
            </div>
          </div>
          
            <div className="w-full bg-[#222426] flex justify-evenly">
              <div className="max-w-7xl flex flex-col md:flex-row gap-8 px-8">
                {planos.map((plano, index) => (
                  <PlanosSuper
                    key={index} {...plano}/>
                ))}
              </div>
            </div>
        </div>
      </main>
    </>
  );
}
