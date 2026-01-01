"use client";

import { useMemo, useState } from "react";

type Column<T> = {
  key: keyof T;
  label: string;
  numeric?: boolean;
};

export default function DataTable<T extends Record<string, any>>({
  columns,
  rows,
  initialSortKey,
  initialSortDir = "desc",
}: {
  columns: Column<T>[];
  rows: T[];
  initialSortKey: keyof T;
  initialSortDir?: "asc" | "desc";
}) {
  const [sortKey, setSortKey] = useState<keyof T>(initialSortKey);
  const [sortDir, setSortDir] = useState<"asc" | "desc">(initialSortDir);

  const sorted = useMemo(() => {
    const copy = [...rows];
    copy.sort((a, b) => {
      const av = a[sortKey];
      const bv = b[sortKey];

      if (typeof av === "number" && typeof bv === "number") {
        return sortDir === "asc" ? av - bv : bv - av;
      }
      return sortDir === "asc"
        ? String(av).localeCompare(String(bv))
        : String(bv).localeCompare(String(av));
    });
    return copy;
  }, [rows, sortKey, sortDir]);

  function toggle(key: keyof T) {
    if (key === sortKey) setSortDir(sortDir === "asc" ? "desc" : "asc");
    else {
      setSortKey(key);
      setSortDir("desc");
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border border-white/10">
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead className="bg-white/5 text-white/70">
            <tr>
              {columns.map((c) => (
                <th
                  key={String(c.key)}
                  onClick={() => toggle(c.key)}
                  className={`cursor-pointer select-none whitespace-nowrap px-3 py-3 text-left font-medium ${
                    c.numeric ? "text-right" : ""
                  }`}
                  title="Click to sort"
                >
                  <span className="inline-flex items-center gap-2">
                    {c.label}
                    {sortKey === c.key ? (
                      <span className="text-xs text-white/50">
                        {sortDir === "asc" ? "▲" : "▼"}
                      </span>
                    ) : null}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sorted.map((r, i) => (
              <tr key={i} className="border-t border-white/10 hover:bg-white/5">
                {columns.map((c) => (
                  <td
                    key={String(c.key)}
                    className={`whitespace-nowrap px-3 py-3 ${
                      c.numeric ? "text-right tabular-nums" : ""
                    }`}
                  >
                    {String(r[c.key] ?? "")}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
