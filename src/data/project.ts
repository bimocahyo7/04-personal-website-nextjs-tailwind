import { StaticImageData } from "next/image";
import Project1 from "../../public/images/Movie Web.png"
import Project2 from "../../public/images/Design App.png"
import Project3 from "../../public/images/Weather Web.png"
import Project4 from "../../public/images/Blog Web.png"
import { SiNextdotjs, SiFigma } from "react-icons/si";
import { FaReact } from "react-icons/fa";

export type ProjectItemType = {
    name: string
    url: string
    urlDisplay: string
    description: string
    imageSrc: StaticImageData
    icon: React.ElementType
}

export const project: ProjectItemType[] = [
    {
        name: "MovieID Web",
        url: "https://nextjs.org/",
        urlDisplay: "NextJS",
        imageSrc: Project1,
        description: "Simple movie website that displays the poster, synopsis, rating and studio of a movie.",
        icon: SiNextdotjs
    },
    {
        name: "Margalu Design App",
        url: "https://www.figma.com/",
        urlDisplay: "Figma",
        imageSrc: Project2,
        description: "Design a mobile marketplace application that sells Lumajang's natural resources for the Final Project of UI/UX course.",
        icon: SiFigma
    },
    {
        name: "Weather App",
        url: "https://github.com/bimocahyo7",
        urlDisplay: "React",
        imageSrc: Project3,
        description: "Website providing real-time weather updates and forecasts powered by OpenWeatherMap API.",
        icon: FaReact
    },
    {
        name: "Blog App",
        url: "https://react.dev/",
        urlDisplay: "React",
        imageSrc: Project4,
        description: "A blog web about frameworks, their uses, examples, and common questions in development.",
        icon: FaReact
    },
]