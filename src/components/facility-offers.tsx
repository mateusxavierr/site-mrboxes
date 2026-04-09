import type { SVGProps } from "react";

function IconShield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" strokeLinejoin="round" />
    </svg>
  );
}

function IconCamera(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2v11z" strokeLinejoin="round" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}

function IconPest(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <path d="M12 3v4M8 5l2 3M16 5l-2 3M5 10h3M16 10h3M6 16l2-2M18 16l-2-2" strokeLinecap="round" />
      <ellipse cx="12" cy="14" rx="7" ry="5" />
      <path d="M9 14h6" strokeLinecap="round" />
    </svg>
  );
}

function IconCube(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <path d="M12 3l9 5v10l-9 5-9-5V8l9-5z" strokeLinejoin="round" />
      <path d="M12 12l9-5M12 12v10M12 12L3 7" strokeLinejoin="round" />
    </svg>
  );
}

function IconMeeting(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M3 10h18M8 4v14M12 18v3M8 21h8" strokeLinecap="round" />
      <path d="M17 7h.01M17 10h.01" strokeLinecap="round" />
    </svg>
  );
}

function IconVirtualOffice(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" {...props}>
      <path d="M4 22V4a1 1 0 011-1h14a1 1 0 011 1v18" strokeLinecap="round" />
      <path d="M4 12h4v10H4M16 12h4v10h-4M9 8h6M9 12h6" strokeLinecap="round" />
      <path d="M12 2v2" strokeLinecap="round" />
    </svg>
  );
}

const offers = [
  {
    title: "Segurança eletrônica 24 h",
    text: "Monitoramento contínuo para reforçar a tranquilidade de quem guarda na unidade.",
    Icon: IconShield,
  },
  {
    title: "Sistema de câmeras 24 h",
    text: "Gravação e acompanhamento que reforçam o cuidado com o patrimônio armazenado.",
    Icon: IconCamera,
  },
  {
    title: "Controle contra pragas",
    text: "Rotina de manutenção para preservar seu box e os ambientes comuns.",
    Icon: IconPest,
  },
  {
    title: "Boxes a partir de 1 m³",
    text: "Vários tamanhos na mesma operação: comece compacto e ajuste conforme a necessidade evolui.",
    Icon: IconCube,
  },
  {
    title: "Sala de reunião gratuita",
    text: "Clientes podem agendar uso com Wi‑Fi — combine na recepção.",
    Icon: IconMeeting,
  },
  {
    title: "Escritório virtual e endereço fiscal",
    text: "Serviços complementares para negócios; condições e valores direto no atendimento.",
    Icon: IconVirtualOffice,
  },
] as const;

export function FacilityOffersSection() {
  return (
    <section className="section-surface border-y-4 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-2xl font-black text-black sm:text-3xl">
          O que você encontra na unidade
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm font-semibold text-black/80 sm:text-base">
          Segurança, estrutura e serviços que acompanham quem guarda com a Mr. Boxes — para casa e empresa.
        </p>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offers.map(({ title, text, Icon }) => (
            <li
              key={title}
              className="bolt-card flex gap-4 p-5"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-black bg-brand text-black">
                <Icon className="h-7 w-7" aria-hidden />
              </div>
              <div>
                <h3 className="font-bold leading-snug text-black">{title}</h3>
                <p className="mt-1 text-sm font-medium leading-relaxed text-black/75">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
