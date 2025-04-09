"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItemProps = {
  title: string;
  url: string;
  isSelected: boolean;
};

function NavItem({ title, url, isSelected }: NavItemProps) {
  return (
    <li>
      <Link
        className={`block px-3 py-2 transition hover:text-teal-500 ${isSelected ? "text-teal-500" : ""}`}
        href={url}>
        {title}
      </Link>
    </li>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <div className="flex justify-center items-center mx-auto max-w-7xl h-20 bg-white border-b-4 border-orange-400">
      <nav>
        <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur">
          <NavItem title="Tentang Saya" url="/" isSelected={pathname === "/"} />
          <NavItem title="Project" url="/projects" isSelected={pathname === "/projects"} />
          <NavItem title="Essay" url="/essays" isSelected={pathname === "/essays"} />
        </ul>
      </nav>
    </div>
  );
}
