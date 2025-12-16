import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="sl">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
