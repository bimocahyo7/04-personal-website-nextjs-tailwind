import Image, { StaticImageData } from "next/image";

type ProjectItemsProps = {
  name: string;
  url: string;
  urlDisplay: string;
  description: string;
  imageSrc: StaticImageData;
  icon: React.ElementType;
};

export default function ProjectItem({ name, url, urlDisplay, imageSrc, description, icon: Icon }: ProjectItemsProps) {
  return (
    <li className="h-full">
      <a href={url} target="_blank" rel="noopener noreferrer" className="h-full block">
        <div className="group w-68 h-full flex flex-col rounded-xl overflow-hidden shadow-lg bg-white transform transition duration-300 hover:shadow-xl hover:scale-105 hover:shadow-orange-600/40">
          <div className="w-full h-48">
            <Image className="w-full h-full object-cover" src={imageSrc} alt={name} />
          </div>
          <div className="flex flex-col flex-grow px-6 py-4">
            <div className="font-bold text-xl text-slate-800 group-hover:text-violet-500 transition-colors">{name}</div>
            <p className="text-sm text-gray-500 max-h-40 py-2 overflow-hidden">{description}</p>
          </div>
          <div className="px-6 pb-4 mt-auto">
            <span className="inline-flex items-center gap-2 bg-rose-200 rounded-lg px-3 py-1 text-sm font-semibold text-pink-900">
              <Icon className="w-5 h-5" />
              {urlDisplay}
            </span>
          </div>
        </div>
      </a>
    </li>
  );
}
