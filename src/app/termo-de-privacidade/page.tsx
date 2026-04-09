import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Termo de privacidade",
  description: `Como a ${site.name} trata dados e cookies neste site.`,
};

export default function PrivacidadePage() {
  return (
    <div className="section-surface min-h-[60vh] border-b-4">
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <h1 className="text-3xl font-bold text-slate-900">Termo de privacidade</h1>
      <p className="mt-6 text-slate-700">
        A {site.name} leva a privacidade a sério. Este texto resume como tratamos informações neste site.
      </p>
      <p className="mt-4 text-slate-700">
        Nossa política de privacidade visa assegurar que quaisquer informações relativas aos usuários
        não serão fornecidas, publicadas ou comercializadas em circunstâncias indevidas; suas
        informações estarão seguras conosco e não serão transmitidas a terceiros fora da nossa empresa,
        salvo obrigação legal.
      </p>
      <p className="mt-4 text-slate-700">
        Todos os dados pessoais informados ao site são armazenados com acesso restrito a pessoas
        habilitadas, obrigadas a manter confidencialidade.
      </p>
      <p className="mt-4 text-slate-700">
        Adotamos medidas de segurança para proteger informações compartilhadas em contato (por exemplo,
        uso de canais seguros quando aplicável).
      </p>
      <p className="mt-4 text-slate-700">
        Este site pode utilizar ferramentas de análise (como Google Analytics) para entender o uso da
        página de forma agregada. Você pode gerenciar preferências de cookies no seu navegador.
      </p>
      <p className="mt-6 text-slate-700">
        Em caso de dúvidas, entre em contato:{" "}
        <a href={`mailto:${site.email}`} className="text-brand-muted underline hover:text-brand-ink">
          {site.email}
        </a>
        .
      </p>
      <p className="mt-4 text-xs text-slate-500">
        Texto informativo; recomendamos revisão jurídica para adequação plena à LGPD e às práticas da sua operação.
      </p>
    </div>
    </div>
  );
}
