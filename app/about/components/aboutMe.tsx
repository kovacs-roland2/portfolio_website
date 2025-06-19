import { aboutMeContent } from '@/app/content';

export const AboutMe = () => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-[#f0f8ff] text-4xl lg:text-5xl font-normal mb-8">
        About Me
      </h1>
      <p className="text-[#f0f8ff] text-lg lg:text-xl leading-8 max-w-3xl mx-auto">
        {aboutMeContent}
      </p>
    </div>
  );
};
