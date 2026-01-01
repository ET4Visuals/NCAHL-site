import PageHeader from "@/components/PageHeader";
import articles from "@/data/articles.json";

export default function HomePage() {
  return (
    <div className="space-y-6">
      <PageHeader
        title="NCAHL"
        subtitle="Official league hub for rules, schedule, standings, stats, and updates."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-white/60 text-sm">Status</div>
          <div className="mt-1 text-lg font-semibold">Season 1 Build</div>
          <div className="mt-2 text-sm text-white/60">
            Use the navigation bar to view schedule, standings, and stats.
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-white/60 text-sm">Quick Links</div>
          <ul className="mt-2 space-y-1 text-sm">
            <li className="text-white/80">• Standings</li>
            <li className="text-white/80">• Schedule</li>
            <li className="text-white/80">• Player Stats</li>
          </ul>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-white/60 text-sm">Contact</div>
          <div className="mt-2 text-sm text-white/70">
            League management via Discord.
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-white/10 bg-white/5 p-4">
        <h2 className="text-lg font-semibold">Latest Articles</h2>
        <div className="mt-3 grid gap-3 md:grid-cols-2">
          {articles.slice(0, 4).map((a) => (
            <div key={a.id} className="rounded-lg border border-white/10 bg-black/20 p-4">
              <div className="text-sm text-white/60">{a.date}</div>
              <div className="mt-1 font-semibold">{a.title}</div>
              <div className="mt-2 text-sm text-white/60">{a.snippet}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
