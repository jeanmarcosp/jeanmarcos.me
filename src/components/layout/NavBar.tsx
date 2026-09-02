import { useState } from 'react';
import {
  IconBrandGithub, IconBrandLinkedin, IconMenu2, IconX,
} from '@tabler/icons-react';
import ThemeToggle from '../ui/ThemeToggle';

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6">
        <a href="#hero" className="font-mono text-sm font-medium tracking-tight text-text">
          jeanmarcos<span className="text-accent">.</span>perez
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-widest text-text-muted transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <span className="h-4 w-px bg-border" aria-hidden="true" />
          <a
            href="https://www.linkedin.com/in/jeanmarcos-perez/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted transition-colors hover:text-accent"
          >
            <IconBrandLinkedin size={18} stroke={1.75} />
          </a>
          <a
            href="https://github.com/jeanmarcosp"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-muted transition-colors hover:text-accent"
          >
            <IconBrandGithub size={18} stroke={1.75} />
          </a>
          <ThemeToggle />
          <a
            href="assets/Jeanmarcos_Perez_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-accent px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent transition-colors hover:bg-accent hover:text-bg"
          >
            Resume
          </a>
        </div>

        <button
          type="button"
          className="text-text md:hidden"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <IconX size={22} /> : <IconMenu2 size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-border bg-bg px-4 pb-6 md:hidden">
          <div className="flex flex-col gap-5 pt-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs uppercase tracking-widest text-text-muted hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-5">
              <a
                href="https://www.linkedin.com/in/jeanmarcos-perez/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-text-muted hover:text-accent"
              >
                <IconBrandLinkedin size={20} stroke={1.75} />
              </a>
              <a
                href="https://github.com/jeanmarcosp"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-text-muted hover:text-accent"
              >
                <IconBrandGithub size={20} stroke={1.75} />
              </a>
              <ThemeToggle />
            </div>
            <a
              href="assets/Jeanmarcos_Perez_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="self-start border border-accent px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-accent hover:bg-accent hover:text-bg"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;
