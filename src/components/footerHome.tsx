import {Instagram, Linkedin} from 'lucide-react';

export function FooterHome() {
    return (
        <div className="w-full h-[120px] bg-black">
            <div className="flex items-center gap-2">
                <img className="h-[60px]" src="src/assets/images/Logo.png"/>
                <div className="flex flex-col items-center">
                    <span className="text-white text-sm">Feito por Vitor Hugo da Cunha </span>
                    <span className="text-white text-sm">© 2026 Bryar Music.</span>
                </div>
            </div>
            <div>
                <div className="flex gap-4 mt-2">
                    <Instagram className="text-white cursor-pointer hover:text-pink-500 transition" />
                    <Linkedin className="text-white cursor-pointer hover:text-blue-500 transition" />
                </div>
            </div>
        </div>
    )
}