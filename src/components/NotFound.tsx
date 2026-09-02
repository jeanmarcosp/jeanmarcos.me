function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-2 px-4 text-center">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">404</p>
      <h1 className="text-2xl font-semibold text-text">URL Not Found</h1>
      <a href="/" className="mt-4 text-sm text-text-muted transition-colors hover:text-accent">
        Back to home
      </a>
    </div>
  );
}

export default NotFound;
