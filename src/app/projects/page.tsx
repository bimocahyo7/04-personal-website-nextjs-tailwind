import ProjectItem from "@/components/ProjectItem";
import { project } from "@/data/project";

export default function Projects() {
  return (
    <div className="mt-4 px-8 bg-[#ffeea8] p-8">
      <header className="text-center">
        <h1 className="font-bold text-4xl text-zinc-800">Project</h1>
        <p className="text-base mt-3 text-zinc-700">
          Berikut adalah galeri beberapa portofolio project yang saya selesaikan.
        </p>
      </header>
      <div className="my-6 grid place-items-center">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 mt-5">
          {project.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </ul>
      </div>
    </div>
  );
}
