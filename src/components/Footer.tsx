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
  return (
    <footer className="py-6 px-8 border-t-2 border-slate-600">
      <div className="flex justify-between gap-6">
        <div className="flex gap-6 text-sm font-medium text-zinc-600">
          <FooterLink text="Tentang Saya" url="/" />
          <FooterLink text="Project" url="/projects" />
          <FooterLink text="Essay" url="/essays" />
        </div>
      </div>
    </footer>
  );
}
