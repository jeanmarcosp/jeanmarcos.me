function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8">
      <p className="mx-auto max-w-4xl font-mono text-xs text-text-muted">
        &copy;
        {' '}
        {new Date().getFullYear()}
        {' '}
        Jeanmarcos Perez
      </p>
    </footer>
  );
}

export default Footer;
