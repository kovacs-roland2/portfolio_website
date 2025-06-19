import type { FC } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { ContactLink } from './shared/ContactLink';
import { homeContent, contactContent } from '../content';
import type { ContactItem } from '../types';

export const Home: FC = () => {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <Card className="w-full max-w-4xl mx-auto my-24 bg-black/20 backdrop-blur-sm border-[#f0f8ff]/20 shadow-2xl">
        <CardContent className="p-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[#f0f8ff] mb-6 text-4xl lg:text-5xl font-normal tracking-normal">
                {homeContent.title}
              </h1>
              <p className="text-[#f0f8ff] mb-8 text-base lg:text-lg font-normal leading-7 max-w-2xl">
                {homeContent.description}
              </p>
              <Separator className="bg-[#f0f8ff]/30 mb-8" />
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                {contactContent.map((contact: ContactItem) => (
                  <ContactLink
                    key={contact.href}
                    href={contact.href}
                    icon={contact.icon}
                    label={contact.label}
                  />
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <Avatar className="w-64 h-64 border-2 border-[#f0f8ff]">
                <AvatarImage
                  src="./photo.jpg"
                  alt="Roland Kovacs"
                  className="object-cover object-top"
                />
                <AvatarFallback className="text-4xl bg-[#415a77] text-[#f0f8ff]">
                  RK
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
