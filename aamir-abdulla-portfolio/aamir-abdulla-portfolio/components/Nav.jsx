const links = [["Work", "#work"], ["Experience", "#experience"], ["Skills", "#skills"], ["Credentials", "#credentials"], ["Contact", "#contact"]];

export default function Nav({ name }) {
  return (
    <header className="sticky top-0 z-10 border-b border-rule bg-paper/90 backdrop-blur dark:border-line dark:bg-night/90">
      <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-3 text-sm">
        <a href="#top" className="font-semibold">{name}</a>
        <ul className="flex gap-4 overflow-x-auto text-ink/70 dark:text-mist/70">
          {links.map(([label, href]) => (
            <li key={href}><a href={href} className="whitespace-nowrap transition-colors hover:text-accent dark:hover:text-glow">{label}</a></li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
