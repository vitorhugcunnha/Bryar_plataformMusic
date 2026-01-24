import NavBar from "../components/general/NavBar";
import { TableSection } from "../components/TableSection";
import { MenuHome } from "../components/MenuHome";
import {PagamentosSetup} from "../components/PagamentosSetup";
import { FooterHome } from "../components/FooterHome";
import { SetupPlanosSuper } from "../components/SetupPlanosSuper";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <MenuHome />
        <TableSection />
        <PagamentosSetup />
        <SetupPlanosSuper />
        <FooterHome />
      </main>
    </>
  );
}
