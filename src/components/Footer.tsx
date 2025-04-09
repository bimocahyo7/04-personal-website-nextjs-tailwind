import Link from "next/link";

type FooterLinkProps = {
  text: string;
  url: string;
};

function FooterLink({ text, url }: FooterLinkProps) {
  return (
    <Link className="transition hover:text-teal-500" href={url}>
      {text}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-6 px-8 bg-slate-700">
      <div className="flex justify-between gap-6">
        <div className="flex gap-6 text-sm font-medium text-zinc-100">
          <FooterLink text="Tentang Saya" url="/" />
          <FooterLink text="Project" url="/projects" />
          <FooterLink text="Essay" url="/essays" />
        </div>
        <Link href="https://github.com/bimocahyo7" target="_blank">
          <p className="text-zinc-100 text-sm">Copyright © {year} Bimo Cahyo Kusumo</p>
        </Link>
      </div>
    </footer>
  );
}
