import type { FC } from 'react';
import { experience } from '@/app/content';
import type { Experience as ExperienceType } from '@/app/types';

export const Experience: FC = () => {
  return (
    <div className="mb-16">
      <h2 className="text-[#f0f8ff] text-3xl font-normal mb-12 text-center">
        Professional Experience
      </h2>
      <div className="space-y-12">
        {experience.map((exp: ExperienceType) => (
          <div key={`${exp.company}-${exp.title}`} className="text-[#f0f8ff]">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-2xl font-semibold">{exp.company}</h3>
              <span className="text-lg font-medium text-[#f0f8ff]/80">
                {exp.location}
              </span>
            </div>
            <div className="flex justify-between items-center mb-6">
              <h4 className="text-xl font-medium text-[#f0f8ff]/90">
                {exp.title}
              </h4>
              <span className="text-lg font-normal text-[#f0f8ff]/70">
                {exp.period}
              </span>
            </div>
            <ul className="list-disc list-inside space-y-3 ml-6">
              {exp.responsibilities.map((responsibility: string) => (
                <li
                  key={responsibility.substring(0, 50)}
                  className="text-base lg:text-lg leading-7 text-[#f0f8ff]/95"
                >
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};
