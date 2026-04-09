import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconBriefcase,
  IconCart,
  IconFile,
  IconStack,
  IconStethoscope,
  IconTools,
} from "@/components/audience/object-icons";
import { YellowCircleIcon } from "@/components/audience/yellow-circle-icon";
import { IconWhatsApp } from "@/components/icon-whatsapp";
import { pagePhotos } from "@/lib/media";
import { whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Para sua empresa",
  description:
    "Self storage para empresas em Recife: estoque, arquivo e picos de demanda com contrato mensal e box de 1 a 20 m³ — Mr. Boxes.",
};

export default function ParaEmpresaPage() {
  return (
    <div className="pb-16 sm:pb-24">
      {/* Hero */}
      <section className="section-surface border-b-4 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-brand-muted">
              Pessoa jurídica
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              Para sua empresa
            </h1>
            <p className="mt-3 max-w-md text-lg font-medium text-slate-800">
              Depósito sob demanda: estoque e arquivo sem depósito interno nem galpão fixo.
            </p>
            <p className="mt-2 text-sm text-slate-600">
              Atenda picos de campanha, sazonalidade e crescimento com contrato mensal e box do tamanho certo.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#tipos-de-boxes"
                className="inline-flex justify-center rounded-xl border-2 border-black bg-brand px-5 py-2.5 text-sm font-black text-black shadow-bolt-md hover:bg-brand-hover hover:shadow-bolt-press"
              >
                Ver tamanhos
              </Link>
              <a
                href={whatsappHref("Olá! Represento uma empresa e quero falar sobre self storage / box.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-black bg-black px-5 py-2.5 text-sm font-bold text-white shadow-bolt-accent-sm hover:bg-black/90"
              >
                <IconWhatsApp className="h-5 w-5 shrink-0" />
                Falar no WhatsApp
              </a>
            </div>
          </div>
          <div className="relative aspect-[5/3] w-full max-h-[280px] min-h-[200px] overflow-hidden rounded-2xl border-2 border-black shadow-bolt-accent-lg">
            <Image
              src={pagePhotos.paraSuaEmpresa}
              alt="Mr. Boxes — self storage para empresas em Recife"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 480px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Texto institucional */}
      <section className="section-surface border-b-4 px-4 py-12 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-3xl space-y-6 text-slate-800">
          <p className="text-lg leading-relaxed sm:text-xl">
            <strong className="text-brand-ink">Mr. Boxes</strong> para empresa é espaço sob demanda: estoque,
            arquivo e operação com contrato <strong className="text-brand-ink">mensal</strong> e box do tamanho
            certo — sem amarrar galpão fixo nem depósito interno.
          </p>
          <p className="leading-relaxed text-slate-700">
            Escala ou reduza conforme a operação pede; condições comerciais e próximos passos no{" "}
            <strong className="text-brand-ink">WhatsApp</strong>, com a mesma clareza do atendimento para casa.
          </p>
        </div>
      </section>

      {/* Ícones — segmentos */}
      <section className="border-b-4 border-black/10 px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-xl font-bold text-brand-ink sm:text-2xl">
            Onde a Mr. Boxes encaixa
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm text-slate-600">
            Segmentos que mais usam self storage com a gente.
          </p>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-x-4 gap-y-12 sm:max-w-4xl sm:gap-x-10 sm:gap-y-14">
            <YellowCircleIcon label="Estoque & caixas" hint="Reposição e pico de venda" size="lg">
              <IconStack />
            </YellowCircleIcon>
            <YellowCircleIcon label="E-commerce" hint="Pedidos e estoque de apoio" size="lg">
              <IconCart />
            </YellowCircleIcon>
            <YellowCircleIcon label="Arquivo & contratos" hint="Guarda organizada" size="lg">
              <IconFile />
            </YellowCircleIcon>
            <YellowCircleIcon label="Clínicas & saúde" hint="Documentos e materiais" size="lg">
              <IconStethoscope />
            </YellowCircleIcon>
            <YellowCircleIcon label="Escritórios" hint="Advocacia, contábil e afins" size="lg">
              <IconBriefcase />
            </YellowCircleIcon>
            <YellowCircleIcon label="Obra & ferramentas" hint="Materiais e equipamentos" size="lg">
              <IconTools />
            </YellowCircleIcon>
          </div>
        </div>
      </section>
    </div>
  );
}
