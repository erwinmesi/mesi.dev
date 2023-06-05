import logo from '@/assets/images/mesidotdev--sm.webp';
import Image from 'next/image';
import SiteButton from '@/components/ui/SiteButton';
import { URL_LINKEDIN } from '@/config/site';
import { ExternalLink } from 'react-feather';
import IconLinkedIn from '../ui/icons/IconLinkedIn';

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
        <a href={URL_LINKEDIN} target="_blank">
          <SiteButton>
            <span className='flex items-center gap-1'>
              Get <IconLinkedIn size="16" className="pb-0.5" /> touch
            </span>
            <ExternalLink size="14" />
          </SiteButton>
        </a>
      </nav>
    </header>
  );
}

export default SiteHeader;
