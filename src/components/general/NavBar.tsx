import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between md:justify-evenly p-2 bg-[#1B1717]">
        <div>
          <a href="#">
            <img className="h-[60px]"src="src/assets/images/Logo.png"/>
          </a>
        </div>
        <nav className="hidden md:flex">
          <ul className="flex gap-6 font-lexend font-bold text-white items-center">
            <li>
                <button className="hover:opacity-50">Planos</button>
            </li>
            <li>
                <button className="hover:opacity-50">Configurações</button>
            </li>
            <li>
                <button className="hover:opacity-50">Cadastro</button>
            </li>
            <li>
                <button className="hover:opacity-50">Login</button>
            </li>
          </ul>
        </nav>
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>  {isOpen ? <X /> : <Menu />} </button>
      </header>
      <nav className={`md:hidden bg-[#1B1717] border-white/10 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}>
        <ul className="flex border-t flex-col gap-4 px-6 py-4 text-white font-lexend font-bold">
          <li>
            <button className="w-full text-left hover:opacity-50">Planos</button>
          </li>
          <li>
            <button className="w-full text-left hover:opacity-50">Configurações</button>
          </li>
          <li>
            <button className="w-full text-left hover:opacity-50">Cadastro</button>
          </li>
          <li>
            <button className="w-full text-left hover:opacity-50">Login</button>
          </li>
        </ul>
      </nav>
    </>
  );
}
