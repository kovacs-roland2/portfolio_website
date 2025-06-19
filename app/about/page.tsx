'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { AboutMe } from './components/aboutMe';
import { Experience } from './components/experience';
import { Tools } from './components/tools';
import { Contact } from './components/contact';

export default function AboutPage() {
  return (
    <div className="flex justify-center items-start min-h-screen px-4 pt-24 pb-16">
      <Card className="w-full max-w-4xl mx-auto bg-black/20 backdrop-blur-sm border-[#f0f8ff]/20 shadow-2xl">
        <CardContent className="p-8 lg:p-12">
          <AboutMe />
          <Separator className="bg-[#f0f8ff]/30 mb-16" />
          <Experience />
          <Separator className="bg-[#f0f8ff]/30 mb-16" />
          <Tools />
          <Separator className="bg-[#f0f8ff]/30 mb-12" />
          <Contact />
        </CardContent>
      </Card>
    </div>
  );
}
