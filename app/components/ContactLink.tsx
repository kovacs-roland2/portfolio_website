import { Button } from '@/components/ui/button';

export const ContactLink = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: string;
  label?: string;
}) => {
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
        <i className={`${icon} text-2xl`}></i>
      </a>
    </Button>
  );
};
