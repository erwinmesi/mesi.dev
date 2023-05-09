import logo from '@/assets/images/mesidotdev--sm.webp';
import Image from 'next/image';
import SiteButton from '@/components/ui/SiteButton';
import { URL_UPWORK } from '@/config/site';
import { ExternalLink } from 'react-feather';

function SiteHeader() {
  return (
    <header>
      <nav className="site__container py-4 flex-center-y justify-between">
        <a href="/">
          <Image
            src={logo}
            alt="Mesidotdev Logo"
            height={32}
            width={32}
            className="object-contain"
          />
        </a>
        <a href={URL_UPWORK} target="_blank">
          <SiteButton>
            Hire me on Upwork
            <ExternalLink size="14" />
          </SiteButton>
        </a>
      </nav>
    </header>
  );
}

export default SiteHeader;
