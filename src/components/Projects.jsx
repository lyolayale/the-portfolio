import { useState } from "react";
import data from "../data";

export default function Projects() {
  const [projects, setProjects] = useState(data);

  return (
    <div>
      <section
        id="projects"
        className="px-5 bg-orange-200/75 grid grid-cols-1 gap-5 pt-32 pb-10 sm:grid-cols-2 lg:grid-cols-3 lg:h-screen transition-all bg-gradient-to-tr from-slate-200 to-orange-500"
      >
        {projects.map(project => (
          <div
            key={project.id}
            className="project transition-all brightness-75 hover:brightness-100 mix-blend-darken"
          >
            <img
              src={project.path}
              alt={project.desc}
              className="p-5 bg-orange-500/50 rounded-lg"
            />
            <small className="block text-center text-orange-900 font-semibold text-xl pt-5">
              <span className="text-pink-500">···</span> {project.desc}{" "}
              <span className="text-orange-500">···</span>
            </small>
          </div>
        ))}
      </section>
    </div>
  );
}
