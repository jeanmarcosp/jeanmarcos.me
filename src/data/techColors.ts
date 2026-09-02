// Shared color-coding for languages/technologies shown across the site
// (the Hero skills panel and the Projects language badges). Giving each
// one a distinct hue — instead of a single flat accent color — is what
// makes those lists read as data rather than decoration.
//
// Each entry maps to a CSS custom property (defined in index.css) rather
// than a literal hex value, so the color can differ between dark and light
// mode — the dark-tuned hues here don't have enough contrast against a
// light surface, so light mode swaps in darker, more saturated shades.
const techColorVars: Record<string, string> = {
  TypeScript: '--tech-typescript',
  JavaScript: '--tech-javascript',
  React: '--tech-react',
  Node: '--tech-node',
  'RESTful APIs': '--tech-restful-apis',
  Python: '--tech-python',
  Java: '--tech-java',
  C: '--tech-c',
  SQL: '--tech-sql',
  Azure: '--tech-azure',
};

const fallbackVar = '--color-accent';

export function getTechColor(name: string): string {
  return `var(${techColorVars[name] ?? fallbackVar})`;
}

export default techColorVars;
