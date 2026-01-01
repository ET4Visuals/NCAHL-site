"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/schedule", label: "Schedule" },
  { href: "/standings", label: "Standings" },
  { href: "/playoffs", label: "Playoffs" },
  { href: "/player-stats", label: "Player Stats" },
  { href: "/goalie-stats", label: "Goalie Stats" },
  { href: "/clubs", label: "Clubs" },
  { href: "/transactions", label: "Transactions" },
  { href: "/articles", label: "Articles" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-wide">
          NCAHL
        </Link>

        <nav className="hidden gap-4 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm transition ${
                  active ? "text-white" : "text-white/60 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Mobile scroll menu */}
      <div className="border-t border-white/10 md:hidden">
        <div className="mx-auto max-w-6xl overflow-x-auto px-4 py-2">
          <div className="flex w-max gap-3">
            {links.map((l) => {
              const active = pathname === l.href;
              return (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`rounded-full border px-3 py-1 text-xs ${
                    active
                      ? "border-white/30 bg-white/10"
                      : "border-white/10 text-white/70"
                  }`}
                >
                  {l.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </header>
  );
}
