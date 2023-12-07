
import { montserrat } from './ui/fonts';
import './ui/global.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // El antialiased mejora el renderizado la fuente en monitores antiguos
  return (
    <html lang="en" className={`${montserrat.className} antialiased`}> 
      <body>{children}</body>
    </html>
  );
}
