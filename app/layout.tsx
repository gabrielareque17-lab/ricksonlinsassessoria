import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Rickson Lins | Assessoria e Consultoria Contábil',
  description: 'Assessoria e consultoria contábil, tributária e financeira para empresas que buscam crescer com estratégia e segurança.',
  icons: { icon: 'https://raw.githubusercontent.com/gabrielareque17-lab/ricksonlinsassessoria/main/assets/logo-emblem-nav.png' },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}