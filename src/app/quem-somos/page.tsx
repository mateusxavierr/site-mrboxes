import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IconWhatsApp } from "@/components/icon-whatsapp";
import { pagePhotos } from "@/lib/media";
import { site, whatsappHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Quem somos",
  description:
    "Mr. Boxes: self storage em Boa Viagem, Recife — boxes de 1 a 20 m³, segurança e atendimento para casa e empresa.",
};

export default function QuemSomosPage() {
  return (
    <div className="pb-16 sm:pb-24">
      <section className="section-surface border-b-4 px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-brand-muted">Institucional</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-brand-ink sm:text-4xl">Quem somos</h1>
            <p className="mt-3 max-w-xl text-base font-medium leading-relaxed text-slate-800">
              Self storage em {site.addressLine} — boxes de <strong className="text-brand-ink">1 a 20 m³</strong>,
              segurança e atendimento para quem precisa de espaço com clareza.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex justify-center rounded-xl border-2 border-black bg-brand px-5 py-2.5 text-sm font-black text-black shadow-bolt-md hover:bg-brand-hover hover:shadow-bolt-press"
              >
                Ir para o início
              </Link>
              <a
                href={whatsappHref("Olá! Quero saber mais sobre a Mr. Boxes e os boxes disponíveis.")}
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
              src={pagePhotos.quemSomos}
              alt="Estrutura Mr. Boxes — self storage em Recife"
              fill
              className="object-cover object-top"
              sizes="(max-width: 1024px) 100vw, 480px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="section-surface border-b-4 px-4 py-12 sm:px-6 sm:py-14">
        <div className="mx-auto max-w-3xl space-y-6 text-slate-800">
          <div className="rounded-2xl border-4 border-black bg-brand p-5 shadow-bolt-xl sm:p-8">
            <p className="text-center text-xs font-black uppercase leading-snug tracking-wide text-black sm:text-sm md:text-base">
              O primeiro self storage climatizado do Nordeste.
            </p>
            <p className="mt-4 text-center text-base font-medium text-black/95">
              Corredores com ar condicionado para mais conforto ao acessar seu box.
            </p>
          </div>
          <p className="text-lg font-medium text-black/80">
            A <strong className="text-black">{site.name}</strong> é self storage em {site.addressLine}: boxes de{" "}
            <strong className="text-black">1 a 20 m³</strong> para quem precisa de espaço com segurança, contrato
            mensal e atendimento claro.
          </p>
          <p className="mt-4 font-medium text-black/80">
            Atendemos <strong className="text-black">casa e empresa</strong> — mudança, reforma, estoque, arquivo e
            operação. No site você <strong className="text-black">compara tamanhos com fotos</strong> e{" "}
            <strong className="text-black">entende o que cabe em cada box</strong> antes de chamar a equipe no
            WhatsApp.
          </p>
          <p className="mt-8 text-sm text-black/55">
            Unidade em Boa Viagem com foco em segurança, organização e atendimento que acompanha você na escolha do
            tamanho e nos acessos.
          </p>
        </div>
      </section>
    </div>
  );
}
