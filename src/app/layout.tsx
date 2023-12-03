import { useConfigStore } from '@/store/Config';
import SiteHeader from '@/components/layouts/SiteHeader';
import '@/assets/styles/globals.scss';

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = useConfigStore.getState();

  return (
    <html lang="en">
      <title>{config.meta_title}</title>
      <meta name="description" content={config.meta_description} />
      <body>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
