import logo from '@/assets/images/mesidotdev--sm.webp';
import Image from 'next/image';
import SiteButton from '@/components/ui/SiteButton';

function SiteHeader() {
  return (
    <header>
      <nav className="site__container py-4 flex-center-y justify-between">
        <Image
          src={logo}
          alt="Mesidotdev Logo"
          height={32}
          width={32}
          className="object-contain"
        />
        <SiteButton>Hire Me</SiteButton>
      </nav>
    </header>
  );
}

export default SiteHeader;
