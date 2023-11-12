import { Fragment, useCallback } from 'react';
import { ExternalLink } from 'react-feather';
import { useConfigStore } from '@/store/Config';
import cn from 'classnames';
import Image from 'next/image';
import image from '@/assets/images/mesi.webp';
import Dot from '@/components/home/Dot';

const majorTools = [
  'React.js',
  'Next.js',
  'Vue.js',
  'Nuxt.js',
  'Laravel',
  'Flask',
  'Strapi',
];

function HomeHeader({ className }: { className?: string }) {
  const config = useConfigStore.getState();

  const renderSkills = useCallback(
    () =>
      majorTools.map((item, index) => (
        <Fragment key={index}>
          {item}
          {index < majorTools.length - 1 && <Dot />}
        </Fragment>
      )),
    []
  );

  return (
    <section
      className={cn(
        className,
        'flex flex-col sm:flex-row sm:items-center max-w-xl mx-auto gap-y-6 sm:gap-x-8'
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
          <a href={config.upwork_url} target="_blank">
            Upwork Freelancer <ExternalLink className="ml-1 inline" size="14" />
          </a>
        </p>
      </div>
    </section>
  );
}

export default HomeHeader;
