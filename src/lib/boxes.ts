/**
 * Tipos de box por volume (m³). Dimensões de piso são referência na unidade.
 */
export const BOX_M3_SIZES = [1, 3, 5, 7, 10, 15, 20] as const;
export type BoxM3 = (typeof BOX_M3_SIZES)[number];

export type BoxTierId =
  | "b1"
  | "b3"
  | "b5"
  | "b7"
  | "b10"
  | "b15"
  | "b20";

export type BoxTier = {
  id: BoxTierId;
  m3: BoxM3;
  shortName: string;
  name: string;
  approxM2: string;
  approxDims: string;
  profile: string;
  examples: string[];
  note: string;
  index: number;
};

export const BOX_TIERS: BoxTier[] = [
  {
    id: "b1",
    m3: 1,
    shortName: "1 m³",
    name: "Box 1 m³",
    approxM2: "~1 m³",
    approxDims: "Volume compacto — ideal para poucos itens",
    profile: "Arquivo, poucos volumes e objetos do dia a dia",
    examples: ["Caixas e malas", "Documentos", "Objetos sazonais"],
    note: "Entrada econômica para tirar volume de casa ou escritório sem pagar por espaço ocioso.",
    index: 0,
  },
  {
    id: "b3",
    m3: 3,
    shortName: "3 m³",
    name: "Box 3 m³",
    approxM2: "~3 m³",
    approxDims: "Piso de referência na unidade",
    profile: "Guarda extra ou mudança parcial",
    examples: ["Várias caixas", "Objetos médios", "Pequeno estoque"],
    note: "Custo e espaço equilibrados para quem já precisa de um pouco mais de folga que o mínimo.",
    index: 1,
  },
  {
    id: "b5",
    m3: 5,
    shortName: "5 m³",
    name: "Box 5 m³",
    approxM2: "~5 m³",
    approxDims: "Piso de referência na unidade",
    profile: "Um cômodo, home office ou mudança em parte",
    examples: ["Móveis desmontados e caixas", "Eletrodomésticos médios", "Estoque leve"],
    note: "Quando o volume já inclui mobiliário ou caixas que não cabem nos tamanhos menores.",
    index: 2,
  },
  {
    id: "b7",
    m3: 7,
    shortName: "7 m³",
    name: "Box 7 m³",
    approxM2: "~7 m³",
    approxDims: "Piso de referência na unidade",
    profile: "Mais móveis ou estoque em expansão",
    examples: ["Parte de uma sala", "Caixas e prateleiras", "Arquivo com equipamentos"],
    note: "Boa opção se você precisa organizar e circular dentro do box com mais conforto.",
    index: 3,
  },
  {
    id: "b10",
    m3: 10,
    shortName: "10 m³",
    name: "Box 10 m³",
    approxM2: "~10 m³",
    approxDims: "Piso de referência na unidade",
    profile: "Mudança ampla, loja compacta ou operação contínua",
    examples: ["Mobiliário de vários cômodos", "Estoque médio", "Materiais de obra"],
    note: "Quando o conteúdo já ultrapassa com folga os tamanhos menores.",
    index: 4,
  },
  {
    id: "b15",
    m3: 15,
    shortName: "15 m³",
    name: "Box 15 m³",
    approxM2: "~15 m³",
    approxDims: "Piso de referência na unidade",
    profile: "Residência grande ou operação com muito volume",
    examples: ["Muitos móveis e caixas", "Pallets e estoque", "Equipamentos variados"],
    note: "Para listas longas ou quando o volume já exige folga generosa.",
    index: 5,
  },
  {
    id: "b20",
    m3: 20,
    shortName: "20 m³",
    name: "Box 20 m³",
    approxM2: "~20 m³",
    approxDims: "Piso de referência na unidade",
    profile: "Maior faixa — mudança completa ou operação intensa",
    examples: ["Mudança residencial completa", "Operação com ida e volta frequente", "Estoque volumoso"],
    note: "Se estiver em dúvida entre dois tamanhos, o maior reduz risco no dia da mudança.",
    index: 6,
  },
];

export function tierByIndex(i: number): BoxTier {
  const clamped = Math.max(0, Math.min(BOX_TIERS.length - 1, Math.round(i)));
  return BOX_TIERS[clamped]!;
}

export function tierByM3(m3: BoxM3): BoxTier | undefined {
  return BOX_TIERS.find((t) => t.m3 === m3);
}

/** Fotos em `public/tipos-de-boxes/{m3}m.png` (ex.: 1m.png, 10m.png). */
export function boxTypeImageSrc(m3: BoxM3): string {
  return `/tipos-de-boxes/${m3}m.png`;
}
