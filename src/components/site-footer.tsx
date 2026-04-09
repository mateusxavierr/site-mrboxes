import Image from "next/image";
import Link from "next/link";
import { brandMedia } from "@/lib/media";
import { site, whatsappHref, whatsappLegacyHref } from "@/lib/site";

const links = [
  { href: "/", label: "Início" },
  { href: "/para-voce", label: "Para você" },
  { href: "/para-sua-empresa", label: "Para sua empresa" },
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/contato", label: "Contato" },
  { href: "/termo-de-privacidade", label: "Privacidade" },
];

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-black bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-3">
        <div>
          <Image
            src={brandMedia.logoRodape}
            alt={`${site.name} — logotipo`}
            width={280}
            height={100}
            className="mb-4 h-14 w-auto max-w-[260px] object-contain object-left sm:h-16"
          />
          <p className="text-sm text-slate-400">{site.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed">{site.addressFull}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            Contato
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="hover:text-brand">
                WhatsApp {site.whatsappDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappLegacyHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand"
              >
                WhatsApp {site.whatsappLegacyDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-brand">
                {site.email}
              </a>
            </li>
            <li className="pt-1 text-slate-400">{site.hours}</li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-brand">
            Links
          </p>
          <ul className="mt-3 grid gap-2 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-4 text-sm">
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand"
            >
              Instagram
            </a>
            <a
              href={site.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand"
            >
              Facebook
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name}. Todos os direitos reservados.
      </div>
    </footer>
  );
}
