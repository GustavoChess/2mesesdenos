import type { Metadata } from 'next';
import './globals.css';

const publicBasePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/+$/, '');

export const metadata: Metadata = {
  title: '2 meses de nós — uma pequena carta para você',
  description: 'Uma carta de dois meses em seis páginas de scrapbook.',
  icons: { icon: `${publicBasePath}/favicon.svg` },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
