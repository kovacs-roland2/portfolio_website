import { tools } from '@/app/content';
import { Badge } from '@/components/ui/badge';

export const Tools = () => {
  return (
    <div className="mb-16">
      <h2 className="text-[#f0f8ff] text-3xl font-normal mb-8 text-center">
        Technical Skills
      </h2>
      <div className="space-y-6">
        {tools.map(tool => (
          <div key={tool.key} className="text-center">
            <h3 className="text-[#f0f8ff] text-xl font-medium mb-4">
              {tool.key}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {tool.values.map(value => (
                <Badge
                  key={value}
                  variant="outline"
                  className="text-[#f0f8ff] border-[#f0f8ff]/50 hover:bg-[#f0f8ff]/10 px-4 py-2 text-base"
                >
                  {value}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
