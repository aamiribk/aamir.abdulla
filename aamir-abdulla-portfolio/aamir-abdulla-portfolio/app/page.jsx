import Nav from "../components/Nav";
import Section from "../components/Section";
import { profile, lifecycle, stats, work, experience, skills, education, certifications } from "../data/content";

const link = "underline decoration-rule underline-offset-4 transition-colors hover:text-accent hover:decoration-accent dark:decoration-line dark:hover:text-glow";

export default function Home() {
  return (
    <main id="top">
      <Nav name={profile.name} />

      <section className="mx-auto max-w-5xl px-6 pb-20 pt-20">
        <p className="text-sm text-ink/60 dark:text-mist/60">{profile.title} · {profile.location}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">{profile.name}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80 dark:text-mist/80">{profile.headline}</p>
        <div className="mt-8 flex flex-wrap gap-3 text-sm">
          <a href={`mailto:${profile.email}`} className="rounded bg-ink px-5 py-2.5 font-medium text-paper transition-colors hover:bg-accent dark:bg-mist dark:text-night dark:hover:bg-glow">Get in touch</a>
          <a href="#work" className="rounded border border-rule px-5 py-2.5 font-medium transition-colors hover:border-accent hover:text-accent dark:border-line dark:hover:border-glow dark:hover:text-glow">See selected work</a>
        </div>

        <ol aria-label="Trade lifecycle I cover" className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded border border-rule bg-rule text-sm sm:grid-cols-6 dark:border-line dark:bg-line">
          {lifecycle.map((step, i) => (
            <li key={step} style={{ animationDelay: `${i * 90}ms` }} className="settle bg-paper px-4 py-3 dark:bg-night">
              <span className="font-figures text-xs text-accent dark:text-glow">{i + 1}</span>
              <span className="ml-2 font-medium">{step}</span>
            </li>
          ))}
        </ol>

        <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dd className="font-figures text-2xl font-semibold tabular-nums">{s.value}</dd>
              <dt className="mt-1 text-sm text-ink/65 dark:text-mist/65">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      <Section id="about" title="About">
        <div className="max-w-2xl space-y-4 leading-relaxed text-ink/85 dark:text-mist/85">
          {profile.about.map((p) => <p key={p}>{p}</p>)}
        </div>
      </Section>

      <Section id="work" title="Selected work">
        <div className="space-y-12">
          {work.map((w) => (
            <article key={w.name}>
              <h3 className="text-xl font-semibold tracking-tight">{w.name}</h3>
              <p className="mt-1 text-sm text-ink/60 dark:text-mist/60">{w.org}</p>
              <dl className="mt-4 grid gap-x-6 gap-y-3 text-sm leading-relaxed sm:grid-cols-[7rem_1fr]">
                {[["Problem", w.problem], ["Solution", w.solution], ["My role", w.contribution], ["Outcome", w.outcome]].map(([k, v]) => (
                  <div key={k} className="contents">
                    <dt className="font-medium text-ink/60 dark:text-mist/60">{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 text-sm text-accent dark:text-glow">{w.tech.join(", ")}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience">
        <div className="space-y-10">
          {experience.map((e) => (
            <article key={e.role + e.dates} className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <p className="font-figures text-sm text-ink/60 dark:text-mist/60">{e.dates}</p>
              <div>
                <h3 className="font-semibold">{e.role}</h3>
                <p className="text-sm text-ink/60 dark:text-mist/60">{e.org}, {e.place}</p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed marker:text-rule dark:marker:text-line">
                  {e.points.map((p) => <li key={p}>{p}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section id="skills" title="Skills">
        <dl className="space-y-5 text-sm">
          {skills.map((s) => (
            <div key={s.group} className="grid gap-1 sm:grid-cols-[11rem_1fr] sm:gap-6">
              <dt className="font-medium">{s.group}</dt>
              <dd className="leading-relaxed text-ink/80 dark:text-mist/80">{s.items.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section id="credentials" title="Education and certifications">
        <div className="space-y-6 text-sm">
          {education.map((e) => (
            <div key={e.name} className="grid gap-1 sm:grid-cols-[9rem_1fr] sm:gap-6">
              <p className="font-figures text-ink/60 dark:text-mist/60">{e.dates}</p>
              <p><span className="font-semibold">{e.name}</span><br />{e.org}</p>
            </div>
          ))}
          <ul className="list-disc space-y-1.5 pl-5 marker:text-rule dark:marker:text-line">
            {certifications.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </Section>

      <Section id="contact" title="Contact">
        <div className="space-y-2 text-lg">
          <p>Open to investment operations, middle office and settlements roles.</p>
          <p><a className={link} href={`mailto:${profile.email}`}>{profile.email}</a></p>
          <p><a className={link} href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></p>
          <p><a className={link} href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn profile</a></p>
        </div>
      </Section>

      <footer className="border-t border-rule py-8 text-center text-sm text-ink/60 dark:border-line dark:text-mist/60">
        {profile.name} · {profile.location}
      </footer>
    </main>
  );
}
