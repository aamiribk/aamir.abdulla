export default function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-16 border-t border-rule py-16 dark:border-line">
      <div className="mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-[11rem_1fr]">
        <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
        <div>{children}</div>
      </div>
    </section>
  );
}
