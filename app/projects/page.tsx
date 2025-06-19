'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ProjectsHeader } from './components/projectsHeader';
import { ProjectsGrid } from './components/projectsGrid';

export default function ProjectsPage() {
  return (
    <div className="flex justify-center items-start min-h-screen px-4 pt-24 pb-16">
      <Card className="w-full max-w-6xl mx-auto bg-black/20 backdrop-blur-sm border-[#f0f8ff]/20 shadow-2xl">
        <CardContent className="p-8 lg:p-12">
          <ProjectsHeader />
          <Separator className="bg-[#f0f8ff]/30 mb-12" />
          <ProjectsGrid />
        </CardContent>
      </Card>
    </div>
  );
}
