import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { projectsData } from '@/app/content';

export const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projectsData.map((project, index) => (
        <Card
          key={`${project.title}-${index}`}
          className="bg-[#f0f8ff] border-[#f0f8ff]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
        >
          <CardContent className="p-6 flex flex-col h-full">
            <div className="mb-4 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="flex-1 flex flex-col">
              <h3 className="text-[#333] text-xl font-semibold mb-3 leading-tight">
                {project.title}
              </h3>

              <p className="text-[#333] text-base leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <Button
                asChild
                className="bg-[#415a77] hover:bg-[#2e4057] text-[#f0f8ff] self-start group"
              >
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  Read more
                  <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
