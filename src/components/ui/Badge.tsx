import { getTechColor } from '../../data/techColors';

interface BadgeProps {
  children: string;
}

function Badge({ children }: BadgeProps) {
  const color = getTechColor(children);

  return (
    <span className="inline-flex items-center gap-1.5 border border-border px-2.5 py-1 font-mono text-xs uppercase tracking-wide text-text-muted">
      <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} aria-hidden="true" />
      {children}
    </span>
  );
}

export default Badge;
