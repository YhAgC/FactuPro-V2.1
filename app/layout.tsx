import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | FactuPro Dashboard',
    default: 'FactuPro Dashboard',
  },
  description: 'The official.',
  metadataBase: new URL('https://aulavirtual.uniremington.edu.co/course/view.php?id=6560&section=2'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
