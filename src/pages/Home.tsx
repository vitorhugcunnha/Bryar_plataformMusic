import { useEffect } from "react";
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
              <span className="text-white font-medium text-lg pt-10">
                <p>Aproveite das melhores músicas, dos seus artistas favoritos</p>
                <p>em qualquer lugar e quando quiser.</p>
              </span>
            </div>
            <div>
              <img className="h-60 p-12 border shadow-2xs bg-[#290d1f]" src="src/assets/images/LogoBig.png" />
            </div>
          </div>
        </div>  
        <div className="w-full h-screen bg-[#222426]">

        </div>
      </main>
    </>
  );
}
