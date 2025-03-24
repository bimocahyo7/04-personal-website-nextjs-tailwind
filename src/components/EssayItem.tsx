import Image, { StaticImageData } from "next/image";
import { FaArrowRight, FaClock } from "react-icons/fa";

type EssayItemsProps = {
  title: string;
  description: string;
  url: string;
  imageSrc: StaticImageData;
  category: string;
  readTime: string;
};

export default function EssayItem({ title, description, url, imageSrc, category, readTime }: EssayItemsProps) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg transition-all duration-300 overflow-hidden flex flex-col md:flex-row">
      <div className="relative w-full md:w-1/3 h-48 md:h-auto overflow-hidden">
        <Image
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          src={imageSrc}
          alt={title}
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-[#49959c] text-white text-xs font-medium rounded-full">{category}</span>
        </div>
      </div>
      <div className="w-full md:w-2/3 p-6">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
          <FaClock className="w-4 h-4" />
          <span>{readTime}</span>
        </div>
        <h2 className="font-bold text-lg text-gray-800 transition-colors">{title}</h2>
        <p className="text-gray-600 mt-3 text-md line-clamp-3 md:line-clamp-none">{description}</p>
        <div className="mt-6 flex items-center justify-start">
          <a
            href={url}
            className="inline-flex items-center gap-2 text-white font-medium px-4 py-2 bg-[#6A80B9] group-hover:bg-[#9c7279] rounded-lg">
            <span className="group-hover:underline">Read More</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </div>
  );
}
