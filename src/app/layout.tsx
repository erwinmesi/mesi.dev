import { defaultMetadata } from '@/config/site';
import SiteHeader from '@/components/layouts/SiteHeader';
import './globals.scss';

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
