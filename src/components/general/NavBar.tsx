import { useState } from "react"
import { Menu } from "lucide-react";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className="flex items-center justify-between md:justify-evenly p-2 bg-[#1B1717]">
                <div>
                    <a href="">
                        <span>
                            <img className="h-[60px]" src="src/assets/images/Logo.png" alt="Logo Bryar" />
                        </span>
                    </a>
                </div>
                <div className="flex gap-6">
                    <nav className="hidden md:flex">
                        <ul className="flex gap-6 font-lexend font-bold text-white items-center">
                            <li>
                                <button className="hover:opacity-50 transition">Planos</button>
                            </li>
                            <li>
                                <button className="hover:opacity-50 transition">Configurações</button>
                            </li>
                            <li className="font-normal"> | </li>
                            <li>
                                <button className="hover:opacity-50 transition">Cadastro</button>
                            </li>
                            <li>
                                <button className="hover:opacity-50 transition">Login</button>
                            </li>
                        </ul>
                    </nav>
                    <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}><Menu /></button>
                </div>
            </header>
            {isOpen && (
                    <nav className="md:hidden bg-[#1B1717] border-t border-white/10">
                        <ul className="flex flex-col gap-4 px-6 py-4 text-white font-lexend font-bold">
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
                )}
        </>
    )
}