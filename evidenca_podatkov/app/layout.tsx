import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Evidenca Divjadi",
  description: "Sodobna aplikacija za vodenje evidence divjadi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sl">
      <body className="min-h-screen bg-[#C6DCD2] text-gray-900 font-sans">
        <header className="bg-[#155E2C] text-white py-3 flex justify-between items-center px-6">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Lisjak logo"
              className="h-10 w-auto"
            />
            <h1 className="text-2xl font-bold">Lisjak</h1>
          </div>
          <p className="text-sm uppercase tracking-wide">lovski informacijski sistem</p>
        </header>

        {children}
      </body>
    </html>
  );
}
