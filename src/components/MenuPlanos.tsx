import { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";
import { Link } from "react-router-dom";

type VantaEffect = {
  destroy: () => void;
};

export function MenuPlanos() {
    const vantaRef = useRef<HTMLDivElement | null>(null);
    const vantaEffect = useRef<VantaEffect | null>(null);
    
      useEffect(() => {
        if (!vantaEffect.current && vantaRef.current) {
          vantaEffect.current = NET({
            el: vantaRef.current,
            THREE,
            backgroundColor: 0x000000,
            color: 0x299F5E,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 100.00,
            minWidth: 100.00,
            scale: 1.00,
            scaleMobile: 1.00,
            points: 15.00,
            maxDistance: 24.00,
            spacing: 14.00,
            showDots: false
          }) as VantaEffect;
        }
    
        return () => {
          vantaEffect.current?.destroy();
          vantaEffect.current = null;
        };
      }, []);
    return(
        <>
        <div>
            <div ref={vantaRef} className="w-full h-screen pt-2">
                <Link to="/home" className="text-white font-bold">
                    <div className="ml-3 pt-1 pb-1 border-1 border bg-transparent hover:bg-[#299F5E] hover:shadow-4xl rounded-md w-28 flex items-center justify-center">
                        <button className="">Retornar</button>
                    </div>
                </Link>
            </div>
            <div className="w-full h-screen bg-[#0f0f0f]">
                    
            </div>
        </div>
        </>
    )
}