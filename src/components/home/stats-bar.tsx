import { Container, Stat, Reveal } from "@/components/ui";
import { stats } from "@/lib/content";

export function StatsBar() {
  return (
    <section className="border-y border-line bg-ink-900/60" aria-label="Track record">
      <Container>
        <div className="grid grid-cols-2 gap-8 py-12 md:grid-cols-4 md:py-14">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <Stat value={s.value} label={s.label} note={s.note} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
