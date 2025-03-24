import { StaticImageData } from "next/image";
import Essay1 from "../../public/images/Essay1.png";
import Essay2 from "../../public/images/Essay2.png";
import Essay3 from "../../public/images/Essay3.jpg";

export type EssayItemType = {
  title: string;
  description: string;
  url: string;
  imageSrc: StaticImageData;
  category: string;
  readTime: string;
};

export const essay: EssayItemType[] = [
  {
    title: "Pengenalan NextJS 15",
    description:
      "Artikel ini membahas tentang fitur-fitur terbaru yang dihadirkan dalam Next.js 15, termasuk peningkatan performa, optimisasi build time, dan berbagai pembaruan yang memudahkan pengembangan aplikasi web modern.",
    url: "#",
    imageSrc: Essay1,
    category: "Framework",
    readTime: "7 min read"
  },
  {
    title: "Perbedaan SSR dengan CSR",
    description:
      "Penjelasan mendalam tentang perbedaan antara Server-Side Rendering (SSR) dan Client-Side Rendering (CSR), mencakup kelebihan dan kekurangan masing-masing pendekatan, skenario penggunaan yang tepat, dampak terhadap performa aplikasi, dan pertimbangan SEO.",
    url: "#",
    imageSrc: Essay2,
    category: "Web Development",
    readTime: "5 min read"
  },
  {
    title: "Memulai dengan TypeScript di NextJS",
    description:
      "Panduan lengkap menggunakan TypeScript untuk pengembangan aplikasi NextJS yang lebih aman dan mudah dipelihara.",
    url: "#",
    imageSrc: Essay3,
    category: "TypeScript",
    readTime: "8 min read"
  },
];
