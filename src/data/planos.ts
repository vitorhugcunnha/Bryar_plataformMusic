import { Plan } from "../types/types";

export const planos: Plan[] = [
  {
    bg_card: "#299F5E",
    nome_plano: "Individual",
    color_text: "#299F5E",
    preco_text: "R$19.99",
    beneficios: [
      "1 Conta Super",
      "Todos os benefícios do Super Individual",
      "Liberdade para cancelar quando quiser"
    ],
    cor_hover: "#227548",
    text_oferta: "R$0 por 3 meses",
    link: "/planos/individual"
  },
  {
    bg_card: "#FF4777",
    nome_plano: "Super Família",
    color_text: "#FF4777",
    preco_text: "R$34.99",
    beneficios: [
      "4 Contas Super",
      "Todos os benefícios do Super Individual",
      "1 Conta Administradora"
    ],
    cor_hover: "#f02258",
    text_oferta: "R$0 por 1 mês",
    link: "/planos/familia"
  },
  {
    bg_card: "#1d53d1",
    nome_plano: "Universitário",
    color_text: "#1d53d1",
    preco_text: "R$14.99",
    beneficios: [
      "1 Conta Super",
      "Todos os benefícios do Super Individual",
      "Comprovação de matrícula Universitária"
    ],
    cor_hover: "#0841c9",
    text_oferta: "R$0 por 1 mês",
    link: "/planos/universitario"
  }
]
