import {planos} from "../data/planos.ts";
import NavBar from "../components/general/NavBar";
import { TableSection } from "../components/TableSection";
import { MenuHome } from "../components/MenuHome";
import {PagamentosSetup} from "../components/PagamentosSetup";
import { PlanosSuper } from "../components/PlanosSuper";
import { FooterHome } from "../components/FooterHome";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <MenuHome />
          <TableSection />
            <PagamentosSetup />
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
