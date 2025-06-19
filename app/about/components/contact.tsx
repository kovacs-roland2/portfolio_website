import { contactContent } from '@/app/content';
import { ContactLink } from '@/app/components/shared/ContactLink';

export const Contact = () => {
  return (
    <div className="text-center">
      <h2 className="text-[#f0f8ff] text-3xl font-normal mb-8">
        Let's Connect
      </h2>
      <div className="flex justify-center flex-wrap gap-6">
        {contactContent.map(contact => (
          <ContactLink
            key={contact.href}
            href={contact.href}
            icon={contact.icon}
            label={contact.label}
          />
        ))}
      </div>
    </div>
  );
};
