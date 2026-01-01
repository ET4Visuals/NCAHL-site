"use client";
export default function SearchBar({
  value,
  onChange,
  placeholder = "Search...",
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm outline-none placeholder:text-white/40 focus:border-white/25 md:w-72"
    />
  );
}
