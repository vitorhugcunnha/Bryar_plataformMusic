import { Check, X } from "lucide-react";

interface RowProps {
    isTop?: boolean;
    text?: string;
}

export function TableRow({ isTop, text }: RowProps) {
    return (
        <>
            {isTop 
            ?
                <tr className="border-b border-white">
                    <th className="py-6 pr-16 text-white">Benefícios</th>
                    <th className="py-6 pl-10 text-white">Plano Free</th>
                    <th className="py-6 pl-9 pr-1 text-white">Plano Super</th>
                </tr>
            :
                <tr className="border-b border-white hover:opacity-50 transition">
                    <td className="py-6 pl-5 text-white">{text}</td>
                    <td className="py-6 pl-16 text-white"><X className="text-black rounded-[50%] bg-white"/></td>
                    <td className="py-6 pl-7 flex justify-center items-center text-white"><Check className="text-black rounded-[50%] bg-white"/></td>
                </tr>
            }
        </>
    )
}