import { IconArrowUpRight } from '@tabler/icons-react';
import projectData from '../../data/projectData';
import Badge from '../ui/Badge';

function Projects() {
  return (
    <section id="projects" className="border-t border-border px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">01 — Projects</p>

        <div className="mt-6 divide-y divide-border border-t border-border">
          {projectData.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-3 py-6 sm:flex-row sm:items-start sm:gap-6"
            >
              <span className="font-mono text-xs text-text-muted sm:pt-1">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-medium text-text transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <Badge>{project.language}</Badge>
                </div>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-text-muted">
                  {project.description}
                </p>
              </div>
              <IconArrowUpRight
                size={20}
                className="shrink-0 text-text-muted transition-colors group-hover:text-accent sm:pt-1"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
