import logo from '@/assets/images/mesidotdev--sm.webp';
import Image from 'next/image';
import SiteButton from '@/components/ui/SiteButton';
import { ExternalLink } from 'react-feather';
import { useConfigStore } from '@/store/Config';

function SiteHeader() {
  const config = useConfigStore.getState();

  return (
    <header>
      <nav className="site__container !max-w-xl md:px-0 py-7 flex-center-y justify-between">
        <a href="/">
          <Image
            src={logo}
            alt="Mesidotdev Logo"
            height={32}
            width={32}
            className="object-contain rounded"
          />
        </a>
        <a href={config.linkedin_url} target="_blank">
          <SiteButton>
            <span className="flex items-center gap-1">
              {config.navbar_cta_text}
            </span>
            <ExternalLink size="14" />
          </SiteButton>
        </a>
      </nav>
    </header>
  );
}

export default SiteHeader;
