import Image from "next/image";
import Link from "next/link";
import { HeaderNavDesktop, HeaderNavMobile } from "@/components/header-nav";
import { IconWhatsApp } from "@/components/icon-whatsapp";
import { brandMedia } from "@/lib/media";
import { site, whatsappHref } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-black bg-brand shadow-bolt-sm backdrop-blur-md">
      <div className="mx-auto flex min-h-[5.25rem] max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:min-h-[6rem] sm:px-6">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src={brandMedia.logo}
            alt={`${site.name} — logotipo`}
            width={400}
            height={144}
            className="h-14 w-auto object-contain object-left sm:h-[4.75rem] md:h-[5.75rem]"
            priority
          />
        </Link>
        <HeaderNavDesktop />
        <div className="flex items-center gap-2">
          <a
            href={whatsappHref("Olá! Acessei o site da Mr. Boxes e quero falar sobre self storage.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-black bg-black px-4 py-2 text-sm font-bold text-white shadow-bolt-accent-sm transition hover:bg-black/90"
          >
            <IconWhatsApp className="h-5 w-5 shrink-0" />
            WhatsApp
          </a>
        </div>
      </div>
      <HeaderNavMobile />
    </header>
  );
}
