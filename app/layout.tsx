import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SwiftCut AI",
  description: "AI-powered video editing tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
