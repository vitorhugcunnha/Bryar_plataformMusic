import { useEffect } from "react";
import {Check, X } from "lucide-react";
import TRUNK from "vanta/dist/vanta.trunk.min";
import * as THREE from "three";
import NavBar from "../components/general/NavBar";

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
                    <tr className="border-b border-white">
                      <th className="py-6 pr-32 text-white">Benefícios</th>
                      <th className="py-6 pr-10 pl-10 text-white">Plano Free</th>
                      <th className="py-6 pr-10 pl-10 text-white">Plano Super</th>
                    </tr>
                    <tr className="border-b border-white hover:opacity-50 transition">
                      <td className="py-6 pr-10 pl-5 text-white">Músicas sem anúncios.</td>
                      <td className="py-6 pr-10 pl-16 text-white"><X className="text-black rounded-[50%] bg-white"/></td>
                      <td className="py-6 pr-5 pl-10 flex justify-center items-center text-white"><Check className="text-black rounded-[50%] bg-white"/></td>
                    </tr>
                    <tr className="border-b border-white hover:opacity-50 transition">
                      <td className="py-6 pr-10 pl-5 text-white">Ouvir Offline.</td>
                      <td className="py-6 pr-10 pl-16 text-white"><X className="text-black rounded-[50%] bg-white"/></td>
                      <td className="py-6 pr-5 pl-10 flex justify-center items-center text-white"><Check className="text-black rounded-[50%] bg-white"/>
                      </td></tr>
                    <tr className="border-b border-white hover:opacity-50 transition">
                      <td className="py-6 pr-10 pl-5 text-white">Qualidade de áudio alta.</td>
                      <td className="py-6 pr-10 pl-16 text-white"><X className="text-black rounded-[50%] bg-white"/></td>
                      <td className="py-6 pr-5 pl-10 flex justify-center items-center text-white"><Check className="text-black rounded-[50%] bg-white"/></td>
                    </tr>
                    <tr className="border-b border-white hover:opacity-50 transition">
                      <td className="py-6 pr-10 pl-5 text-white">Ouvir com os amigos em tempo real.</td>
                      <td className="py-6 pr-10 pl-16 text-white"><X className="text-black rounded-[50%] bg-white"/></td>
                      <td className="py-6 pr-5 pl-10 flex justify-center items-center text-white"><Check className="text-black rounded-[50%] bg-white"/></td>
                    </tr>
                    <tr className="border-b border-white hover:opacity-50 transition">
                      <td className="py-6 pr-10 pl-5 text-white">Baixar músicas.</td>
                      <td className="py-6 pr-10 pl-16 text-white"><X className="text-black rounded-[50%] bg-white"/></td>     
                      <td className="py-6 pr-5 pl-10 flex justify-center items-center text-white"><Check className="text-black rounded-[50%] bg-white"/></td>
                    </tr>
                    <tr className="border-b border-white hover:opacity-50 transition">
                      <td className="py-6 pr-10 pl-5 text-white">Ouça na ordem que você quiser.</td>
                      <td className="py-6 pr-10 pl-16 text-white"><X className="text-black rounded-[50%] bg-white"/></td>
                      <td className="py-6 pr-5 pl-10 flex justify-center items-center text-white"><Check className="text-black rounded-[50%] bg-white"/></td>
                    </tr>
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
            <div className="bg-white p-[4px] rounded-[5px]">
              <img className="h-8 bg-[#ffffff] border-[2px] border-[#c7c7c7] rounded-[5px] pl-6 pr-6" src="src/assets/images/itau.png" />
            </div>
            <div className="bg-white p-[4px] rounded-[5px]">
              <img className="h-8 bg-[#ffffff] border-[2px] border-[#c7c7c7] rounded-[5px] pl-2 pr-2" src="src/assets/images/master.png" />
            </div>
            <div className="bg-white p-[4px] rounded-[5px]">
              <img className="h-8 bg-[#ffffff] border-[2px] border-[#c7c7c7] rounded-[5px] pl-4 pr-4 pt-2 pb-2" src="src/assets/images/pix.png" />
            </div>
            <div className="bg-white p-[4px] rounded-[5px]">
              <img className="h-8 bg-[#ffffff] border-[2px] border-[#c7c7c7] rounded-[5px] pl-4 pr-4" src="src/assets/images/visa.png" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
