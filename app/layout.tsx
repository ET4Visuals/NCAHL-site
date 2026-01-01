import "../styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "NCAHL",
  description: "NCAHL League Hub",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="mx-auto max-w-6xl px-4 py-6">{children}</main>
        <footer className="mx-auto max-w-6xl px-4 pb-10 pt-6 text-sm text-white/50">
          © {new Date().getFullYear()} NCAHL • League Hub
        </footer>
      </body>
    </html>
  );
}
