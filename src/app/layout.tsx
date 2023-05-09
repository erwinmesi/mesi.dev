import { defaultMetadata } from '@/config/site';
import SiteHeader from '@/components/layouts/SiteHeader';
import '@/assets/styles/globals.scss';

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
        {children}
      </body>
    </html>
  );
}
