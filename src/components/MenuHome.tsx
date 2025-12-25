import { useEffect } from "react";
import TRUNK from "vanta/dist/vanta.trunk.min";
import * as THREE from "three";

export function MenuHome() {
  useEffect(() => {
    const vantaEffect = TRUNK({
      el: "#vanta",
      THREE,
      backgroundColor: 0x1f2020,
      color: 0x98465f,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      scale: 1.0,
      scaleMobile: 1.0,
      spacing: 2.0,
      chaos: 4.0,
    });

    return () => {
      vantaEffect?.destroy();
    };
  }, []);

  return (
    <>
    <div
        id="vanta" className="w-full h-screen flex items-center justify-center">
        <div className="flex items-center justify-center gap-10">
            <div>
            <h1 className="text-white font-bold text-5xl">Seja Bem-vindo Bryar</h1>
            <h2 className="text-white font-bold text-4xl pt-5">Melhor plataforma de</h2>
            <h2 className="text-white font-bold text-4xl">música atualmente</h2>
            <span className="text-white text-lg pt-10 block">
                <p>Aproveite das melhores músicas, dos seus artistas favoritos</p>
                <p>em qualquer lugar e quando quiser.</p>
            </span>
            </div>
            <div>
            <img
                className="h-60 p-12 border shadow-2xs bg-gradient-to-b from-black via-[#98465f] to-red-900" src="src/assets/images/LogoBig.png" alt="Logo Bryar"
            />
            </div>
        </div>
    </div>
    </>
  );
}
