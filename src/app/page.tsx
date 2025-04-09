import type { Metadata } from "next";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope, FaReact, FaServer, FaPaintBrush, FaLaptopCode } from "react-icons/fa";
import ProfilePic from "../../public/images/My Photo.webp";

export const metadata: Metadata = {
  title: "Tentang Saya",
  description: "Halaman tentang saya",
  openGraph: {
    title: "Tentang saya",
    description: "Halaman tentang saya",
  },
};

export default function Home() {
  return (
    <div className="min-h-screen background">
      <div className="max-w-4xl mx-auto pt-16">
        <header className="flex flex-col-reverse md:flex-row items-center gap-12 px-8 md:px-0">
          <div className="flex-1 md:text-left text-center max-w-2xl">
            <h1 className="font-bold text-3xl md:text-4xl text-[#216192]">Bimo Cahyo Kusumo</h1>
            <p className="mt-4 font-semibold text-lg md:text-xl text-zinc-800">Fullstack Developer | React Developer</p>
            <p className="mt-4 text-zinc-700 leading-relaxed text-justify">
              Seorang mahasiswa Teknik Informatika di Politeknik Negeri Malang. Memiliki passion di bidang web
              development, khususnya Frontend menggunakan React & Next.js, serta Backend dengan ExpressJS. Aktif
              mengembangkan proyek pribadi untuk terus mengasah keterampilan teknis dan kreativitas.
            </p>
            <div className="mt-6 flex gap-6">
              <a
                href="https://github.com/bimocahyo7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-zinc-900 transition-colors">
                <FaGithub className="w-7 h-7" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-600 hover:text-cyan-700 transition-colors">
                <FaLinkedin className="w-7 h-7" />
              </a>
              <a href="mailto:bimochayo@gmail.com" className="text-zinc-600 hover:text-rose-800 transition-colors">
                <FaEnvelope className="w-7 h-7" />
              </a>
            </div>
          </div>
          <div className="w-52 h-52 md:w-56 md:h-56">
            <Image
              src={ProfilePic}
              alt="Profile Picture"
              className="rounded-4xl object-cover border-4 border-slate-800 shadow-[8px_8px_0px] shadow-slate-600 hover:scale-105 transition-all ease-in-out"
              priority
            />
          </div>
        </header>

        <section className="mt-16 px-8 md:px-0">
          <h2 className="block font-bold text-medium md:text-lg py-1 px-3.5 rounded-lg bg-[#7A316F] text-white w-fit">
            Tech Stack
          </h2>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 pb-10">
            <div className="p-4 rounded-lg bg-white shadow-sm flex items-start gap-3">
              <FaReact className="w-7 h-7 text-[#61DAFB]" />
              <div>
                <h3 className="font-semibold text-zinc-800">Frontend Development</h3>
                <p className="mt-2 text-zinc-600">React, Next.js, JavaScript, TypeScript, Tailwind</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white shadow-sm flex items-start gap-3">
              <FaServer className="w-6 h-6 text-[#68A063]" />
              <div>
                <h3 className="font-semibold text-zinc-800">Backend Development</h3>
                <p className="mt-2 text-zinc-600">ExpressJS, Laravel, MySQL, PostgreSQL</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white shadow-sm flex items-start gap-3">
              <FaPaintBrush className="w-6 h-6 text-[#FF7262]" />
              <div>
                <h3 className="font-semibold text-zinc-800">UI/UX and Design</h3>
                <p className="mt-2 text-zinc-600">Figma, Adobe Illustrator, Adobe Photoshop</p>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-white shadow-sm flex items-start gap-3">
              <FaLaptopCode className="w-6 h-6 text-[#4B5563]" />
              <div>
                <h3 className="font-semibold text-zinc-800">Other</h3>
                <p className="mt-2 text-zinc-600">React Native, Python, Java</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
