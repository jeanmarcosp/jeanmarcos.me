import landingData from '../../data/landingData';
import { getTechColor } from '../../data/techColors';

// Curated from the "Other Skills & Interests" list on Jeanmarcos's resume
// (public/assets/Jeanmarcos_Perez_Resume.pdf), narrowed to the languages,
// frameworks, and data-layer skills most relevant to a software developer
// portfolio — dropping the resume's design-tool skills (Photoshop,
// Illustrator, Figma, Lightroom, Autodesk Maya) and narrower/secondary
// entries (Kotlin, React Native, Redux, Jest, Nest, Git, Jira,
// Agile, CSS, HTML, Microsoft Office) that are real but less
// central than the core stack below.
const skills = ['Claude Code', 'TypeScript', 'React', 'Node', 'RESTful APIs', 'Python', 'Java', 'SQL', 'Azure'];

function Hero() {
  return (
    <section
      id="hero"
      className="mx-auto flex min-h-[calc(100dvh-4rem)] max-w-4xl flex-col justify-center px-4 py-16 sm:px-6"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">Software Developer</p>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-6xl">
            {landingData.header}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-text-muted sm:text-lg">
            {landingData.blurb}
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="border border-accent bg-accent px-5 py-2.5 text-center text-sm font-medium text-bg transition-opacity hover:opacity-90"
            >
              View my projects
            </a>
            <a
              href="#contact"
              className="border border-border px-5 py-2.5 text-center text-sm font-medium text-text transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>
        </div>

        <div className="relative">
          {/* Two soft circular light sources, not a blurred rectangle — a
              blurred hard-edged shape keeps a visible silhouette, while a
              blurred circle stays a genuinely soft glow. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-10 -top-10 -z-10 h-40 w-40 rounded-full blur-3xl"
            style={{ backgroundColor: 'var(--color-accent)', opacity: 'var(--glow-opacity)' }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-10 -right-10 -z-10 h-40 w-40 rounded-full blur-3xl"
            style={{ backgroundColor: 'var(--color-accent-2)', opacity: 'var(--glow-opacity)' }}
          />
          <div className="overflow-hidden border border-border bg-surface">
            <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" aria-hidden="true" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" aria-hidden="true" />
              <span className="ml-2 font-mono text-xs text-text-muted">skills.ts</span>
            </div>
            <div className="p-5 font-mono text-sm leading-relaxed sm:p-6">
              <p>
                <span className="text-text-muted">const</span>
                {' '}
                <span className="text-accent">skills</span>
                {' '}
                <span className="text-text-muted">= [</span>
              </p>
              {skills.map((skill) => (
                <p key={skill} className="pl-4">
                  <span style={{ color: getTechColor(skill) }}>
                    &quot;
                    {skill}
                    &quot;
                  </span>
                  <span className="text-text-muted">,</span>
                </p>
              ))}
              <p>
                <span className="text-text-muted">];</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
