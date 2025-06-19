import type { FC } from 'react';
import { Button } from '@/components/ui/button';
import type { ContactLinkProps } from '../../types';

export const ContactLink: FC<ContactLinkProps> = ({ href, icon, label }) => {
  return (
    <Button
      variant="ghost"
      size="lg"
      asChild
      className="text-[#f0f8ff] hover:text-[#415a77] hover:bg-[#f0f8ff]/10 transition-all duration-300 p-3"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
      >
        <i className={`${icon} text-2xl`} />
      </a>
    </Button>
  );
};
