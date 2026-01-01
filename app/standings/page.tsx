"use client";

import { useMemo, useState } from "react";
import PageHeader from "@/components/PageHeader";
import DataTable from "@/components/DataTable";
import SearchBar from "@/components/SearchBar";
import SeasonSelect from "@/components/SeasonSelect";
import seasons from "@/data/seasons.json";
import standings from "@/data/standings.json";

export default function StandingsPage() {
  const [season, setSeason] = useState(seasons[0].id);
  const [q, setQ] = useState("");

  const rows = useMemo(() => {
    return standings
      .filter((r) => r.seasonId === season)
      .filter((r) => r.team.toLowerCase().includes(q.toLowerCase()));
  }, [season, q]);

  return (
    <div>
      <PageHeader
        title="League Standings"
        subtitle="Sorted by points (click columns to sort)."
        right={
          <div className="flex w-full flex-col gap-2 md:w-auto md:flex-row">
            <SeasonSelect seasons={seasons} value={season} onChange={setSeason} />
            <SearchBar value={q} onChange={setQ} placeholder="Search team..." />
          </div>
        }
      />

      <DataTable
        columns={[
          { key: "rank", label: "Rank", numeric: true },
          { key: "team", label: "Team" },
          { key: "gp", label: "GP", numeric: true },
          { key: "w", label: "W", numeric: true },
          { key: "l", label: "L", numeric: true },
          { key: "otl", label: "OTL", numeric: true },
          { key: "pts", label: "PTS", numeric: true },
          { key: "gf", label: "GF", numeric: true },
          { key: "ga", label: "GA", numeric: true },
          { key: "diff", label: "+/-", numeric: true },
        ]}
        rows={rows}
        initialSortKey="pts"
      />
    </div>
  );
}
