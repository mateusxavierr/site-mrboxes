import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  IconBike,
  IconBox,
  IconFile,
  IconGift,
  IconPlane,
  IconSofa,
} from "@/components/audience/object-icons";
import { YellowCircleIcon } from "@/components/audience/yellow-circle-icon";
import { IconWhatsApp } from "@/components/icon-whatsapp";
import { pagePhotos } from "@/lib/media";
import { whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Para você",
  description:
    "Self storage em Recife para quem precisa de espaço em casa: contrato mensal, sem fiador, corredores climatizados — Mr. Boxes, Boa Viagem.",
};

export default function ParaVocePage() {
  return (
    <div className="pb-16 sm:pb-24">
      {/* Hero */}
      <section className="section-surface border-b-4 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-brand-muted">
              Pessoa física
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">
              Para você
            </h1>
            <p className="mt-3 max-w-xl text-base font-medium leading-relaxed text-slate-800">
              Espaço para você, para o que precisa guardar — com a praticidade da Mr. Boxes.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/#tipos-de-boxes"
                className="inline-flex justify-center rounded-xl border-2 border-black bg-brand px-5 py-2.5 text-sm font-black text-black shadow-bolt-md hover:bg-brand-hover hover:shadow-bolt-press"
              >
                Ver tipos de boxes
              </Link>
              <a
                href={whatsappHref("Olá! Vim da página Para você e quero falar sobre box para uso pessoal.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-black bg-black px-5 py-2.5 text-sm font-bold text-white shadow-bolt-accent-sm hover:bg-black/90"
              >
                <IconWhatsApp className="h-5 w-5 shrink-0" />
                WhatsApp
              </a>
            </div>
          </div>
          <div className="relative aspect-[5/3] w-full max-h-[280px] min-h-[200px] overflow-hidden rounded-2xl border-2 border-black shadow-bolt-accent-lg">
            <Image
              src={pagePhotos.paraVoce}
              alt="Mr. Boxes — espaço para guardar o que importa"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 480px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Texto institucional personalizado */}
      <section className="section-surface border-b-4 px-4 py-12 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-3xl space-y-6 text-slate-800">
          <p className="text-lg leading-relaxed sm:text-xl">
            <strong className="text-brand-ink">Mr. Boxes</strong> é o espaço extra quando a casa aperta:
            você aluga o box que precisa com contrato{" "}
            <strong className="text-brand-ink">mensal</strong> e usa quando quiser — sem amarrar longo
            prazo.
          </p>
          <p className="leading-relaxed text-slate-700">
            Sem fiador, sem repasse de <strong>IPTU</strong>, <strong>energia</strong> ou custo fixo de{" "}
            <strong>segurança</strong> como em imóvel próprio: você paga pelo espaço do box e pelo tempo
            que fizer sentido.
          </p>
        </div>
      </section>

      {/* Ícones — usos principais */}
      <section className="border-b-4 border-black/10 px-4 py-14 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-xl font-bold text-brand-ink sm:text-2xl">
            O que costuma vir para cá
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-center text-sm text-slate-600">
            Situações comuns dos nossos clientes — veja o que combina com a sua.
          </p>
          <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-x-4 gap-y-12 sm:max-w-4xl sm:gap-x-10 sm:gap-y-14">
            <YellowCircleIcon label="Mudança / reforma" hint="Móveis, caixas e interino" size="lg">
              <IconSofa />
            </YellowCircleIcon>
            <YellowCircleIcon label="Caixas & volume" hint="Fora do caminho, protegido" size="lg">
              <IconBox />
            </YellowCircleIcon>
            <YellowCircleIcon label="Lazer" hint="Bike, prancha, equipamento" size="lg">
              <IconBike />
            </YellowCircleIcon>
            <YellowCircleIcon label="Casamento" hint="Presentes até a data" size="lg">
              <IconGift />
            </YellowCircleIcon>
            <YellowCircleIcon label="Papéis & arquivo" hint="Caixas e pastas em ordem" size="lg">
              <IconFile />
            </YellowCircleIcon>
            <YellowCircleIcon label="Entre cidades" hint="Bens até fechar endereço" size="lg">
              <IconPlane />
            </YellowCircleIcon>
          </div>
        </div>
      </section>
    </div>
  );
}
