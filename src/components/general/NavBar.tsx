

export default function NavBar() {
    return (
        <>
            <header className="flex items-center justify-evenly p-2 bg-[#1B1717]">
                <div>
                    <a href="">
                        <span>
                            <img className="h-[60px]" src="src/assets/images/Logo.png" alt="Logo Bryar" />
                        </span>
                    </a>
                </div>
                <div className="flex gap-6">
                    <nav >
                        <ul className="flex gap-6 font-lexend font-bold text-white">
                            <li>
                                <button>Planos</button>
                            </li>
                            <li className="font-normal"> | </li>
                            <li>
                                <button>Cadastro</button>
                            </li>
                            <li>
                                <button>Login</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}