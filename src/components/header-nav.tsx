"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Início" },
  { href: "/para-voce", label: "Para você" },
  { href: "/para-sua-empresa", label: "Para sua empresa" },
  { href: "/quem-somos", label: "Quem somos" },
  { href: "/contato", label: "Contato" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function HeaderNavDesktop() {
  const pathname = usePathname();
  return (
    <nav className="hidden items-center gap-1 md:flex" aria-label="Principal">
      {items.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={
              active
                ? "rounded-lg border-2 border-black bg-white px-3 py-2 text-sm font-bold text-black shadow-bolt-sm"
                : "rounded-lg px-3 py-2 text-sm font-semibold text-black transition hover:bg-black/10 hover:text-black"
            }
            aria-current={active ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function HeaderNavMobile() {
  const pathname = usePathname();
  return (
    <nav
      className="flex gap-1 overflow-x-auto border-t-2 border-black/20 bg-transparent px-4 py-2 md:hidden"
      aria-label="Principal mobile"
    >
      {items.map((item) => {
        const active = isActive(pathname, item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={
              active
                ? "shrink-0 rounded-full border-2 border-black bg-white px-3 py-1.5 text-xs font-bold text-black shadow-bolt-sm"
                : "shrink-0 rounded-full border-2 border-black/25 bg-white/95 px-3 py-1.5 text-xs font-semibold text-black shadow-bolt-sm"
            }
            aria-current={active ? "page" : undefined}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
