import { Instagram, Linkedin } from "lucide-react";

export function FooterHome() {
    return (
        <div className="w-full h-[200px] bg-black flex flex-col justify-evenly items-center">
            <div className="flex items-center gap-10 md:gap-72">
                <img className="h-[50px] md:h-[60px]" src="src/assets/images/Logo.png"/>
                <div className="flex flex-col items-center">
                    <span className="text-white text-sm">Feito por Vitor Hugo da Cunha</span>
                    <span className="text-white text-sm">© 2026 Bryar Music.</span>
                    <div className="flex gap-6 md:gap-8 md:pt-2">
                        <a href="https://www.instagram.com/vitorcunha12/" target="_blank" rel="noopener noreferrer"><Instagram className="text-white cursor-pointer transition-all duration-500 ease-out hover:-translate-y-0.5 hover:text-pink-500" /></a>
                        <a href="https://www.linkedin.com/in/vitor-hugo-da-cunha-8a429830a/" target="_blank" rel="noopener noreferrer"><Linkedin className="text-white cursor-pointer transition-all duration-500 ease-out hover:-translate-y-0.5 hover:text-blue-500" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
