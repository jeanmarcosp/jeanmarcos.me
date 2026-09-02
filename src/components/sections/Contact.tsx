import {
  IconArrowUpRight, IconBrandGithub, IconBrandLinkedin, IconMail,
} from '@tabler/icons-react';

const contactLinks = [
  {
    label: 'Email',
    value: 'jeanmarcosperez2002@gmail.com',
    href: 'mailto:jeanmarcosperez2002@gmail.com',
    icon: IconMail,
  },
  {
    label: 'LinkedIn',
    value: 'jeanmarcos-perez',
    href: 'https://www.linkedin.com/in/jeanmarcos-perez/',
    icon: IconBrandLinkedin,
  },
  {
    label: 'GitHub',
    value: 'jeanmarcosp',
    href: 'https://github.com/jeanmarcosp',
    icon: IconBrandGithub,
  },
];

function Contact() {
  return (
    <section id="contact" className="border-t border-border px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">02 — Contact</p>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
          Feel free to reach out through any of the channels below.
        </p>

        <div className="mt-8 divide-y divide-border border-t border-border">
          {contactLinks.map(({
            label, value, href, icon: Icon,
          }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 py-5"
            >
              <Icon size={20} className="shrink-0 text-text-muted transition-colors group-hover:text-accent" stroke={1.75} />
              <span className="w-24 shrink-0 font-mono text-xs uppercase tracking-widest text-text-muted">
                {label}
              </span>
              <span className="flex-1 text-sm text-text transition-colors group-hover:text-accent">
                {value}
              </span>
              <IconArrowUpRight size={18} className="shrink-0 text-text-muted transition-colors group-hover:text-accent" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
