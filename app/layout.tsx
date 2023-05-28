import "../index.css";

export const metadata = {
  title: "Focus App",
  description: "A Nextjs App",
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
