/** Imagens oficiais hospedadas em mrboxes.com.br */
export const MRBOXES_ORIGIN = "https://www.mrboxes.com.br" as const;

/** Logo principal: coloque o PNG em `public/logo.png` (ou altere o caminho abaixo). */
export const brandLogoPng = "/logo.png" as const;

/** Fotos estáticas: caminho = URL pública (= arquivo em `public/` na raiz do projeto) */
export const pagePhotos = {
  /** → `public/hero.png` */
  homeHero: "/hero.png",
  contato: "/contato.avif",
  paraVoce: "/pravoce.avif",
  paraSuaEmpresa: "/prasuaempresa.avif",
  /** → `public/quemsomos.png` */
  quemSomos: "/quemsomos.png",
} as const;

/** Dimensões intrínsecas de `public/hero.png` — atualize se trocar o arquivo */
export const homeHeroDimensions = { width: 1340, height: 1304 } as const;

export const brandMedia = {
  logo: brandLogoPng,
  logoRodape: brandLogoPng,
  /** Fotos do painel (site original) */
  painel: [
    `${MRBOXES_ORIGIN}/img/painel/01.jpg`,
    `${MRBOXES_ORIGIN}/img/painel/02.jpg`,
    `${MRBOXES_ORIGIN}/img/painel/03.jpg`,
    `${MRBOXES_ORIGIN}/img/painel/04.jpg`,
    `${MRBOXES_ORIGIN}/img/painel/05.jpg`,
  ],
  mulher: `${MRBOXES_ORIGIN}/img/mulher.png`,
  pratica: `${MRBOXES_ORIGIN}/img/pratica.png`,
} as const;
