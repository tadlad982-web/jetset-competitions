import "../styles/globals.css";

export const metadata = {
  title: "Jetset Competitions",
  description: "Win your dream holiday with Jetset."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
