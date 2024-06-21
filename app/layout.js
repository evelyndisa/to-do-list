import "./globals.css";

export const metadata = {
  title: "To do list",
  description: "To do list by Evelyn Di Salvo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
