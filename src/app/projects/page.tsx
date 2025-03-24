import ProjectItem from "@/components/ProjectItem";
import { project } from "@/data/project";

export default function Projects() {
  return (
    <div className="px-8 bg-[#ffeea8] py-8">
      <header className="text-center">
        <h1 className="font-bold text-4xl text-slate-800">Project</h1>
        <p className="text-base font-medium mt-3 text-slate-600">
          Berikut adalah galeri beberapa portofolio project yang saya selesaikan.
        </p>
      </header>
      <div className="my-6 grid place-items-center">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mt-5">
          {project.map((projectData, index) => (
            <ProjectItem key={index} {...projectData} />
          ))}
        </ul>
      </div>
    </div>
  );
}
