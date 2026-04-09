import { IconWhatsApp } from "@/components/icon-whatsapp";
import { whatsappHref } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={whatsappHref("Olá! Acessei o site da Mr. Boxes e quero falar sobre self storage.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full border-2 border-black bg-emerald-500 text-white shadow-bolt-lg transition hover:bg-emerald-600 hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-bolt-md focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2"
      aria-label="Falar no WhatsApp"
    >
      <IconWhatsApp className="h-7 w-7" />
    </a>
  );
}
