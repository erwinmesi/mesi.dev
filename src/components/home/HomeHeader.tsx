import { useCallback } from 'react';
import { ExternalLink } from 'react-feather';
import { URL_UPWORK } from '@/config/site';
import cn from 'classnames';
import Image from 'next/image';
import image from '@/assets/images/mesi.webp';
import Dot from '@/components/home/Dot';

const majorTools = [
  'PHP',
  'Laravel',
  'Vue.js',
  'Nuxt.js',
  'React.js',
  'Next.js',
];

function HomeHeader({ className }: any) {
  const renderSkills = useCallback(
    () =>
      majorTools.map((item, index) => (
        <>
          {item}
          {index < majorTools.length - 1 && <Dot />}
        </>
      )),
    []
  );

  return (
    <section
      className={cn(
        className,
        'flex flex-col sm:flex-row sm:items-center max-w-2xl mx-auto gap-y-6 sm:gap-x-8'
      )}
    >
      <span>
        <Image
          src={image}
          width="128"
          height="128"
          alt="Erwin Mesias"
          loading="eager"
        />
      </span>
      <div className="space-y-1">
        <h1 className="text-2xl">Erwin Mesias</h1>
        <p className="text-grey-200 text-base">
          Full-Stack Web & Mobile Developer
        </p>
        <p className="text-sm">{renderSkills()}</p>
        <p className="text-grey-300 hover:text-grey-300 hover:underline flex">
          <a href={URL_UPWORK} target="_blank">
            Upwork Freelancer <ExternalLink className="ml-1 inline" size="14" />
          </a>
        </p>
      </div>
    </section>
  );
}

export default HomeHeader;
